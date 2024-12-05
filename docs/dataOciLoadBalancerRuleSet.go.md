# `dataOciLoadBalancerRuleSet` Submodule <a name="`dataOciLoadBalancerRuleSet` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerRuleSet <a name="DataOciLoadBalancerRuleSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set oci_load_balancer_rule_set}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

dataociloadbalancerruleset.NewDataOciLoadBalancerRuleSet(scope Construct, id *string, config DataOciLoadBalancerRuleSetConfig) DataOciLoadBalancerRuleSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig">DataOciLoadBalancerRuleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig">DataOciLoadBalancerRuleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerRuleSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

dataociloadbalancerruleset.DataOciLoadBalancerRuleSet_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

dataociloadbalancerruleset.DataOciLoadBalancerRuleSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

dataociloadbalancerruleset.DataOciLoadBalancerRuleSet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

dataociloadbalancerruleset.DataOciLoadBalancerRuleSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLoadBalancerRuleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLoadBalancerRuleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLoadBalancerRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList">DataOciLoadBalancerRuleSetItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.items"></a>

```go
func Items() DataOciLoadBalancerRuleSetItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList">DataOciLoadBalancerRuleSetItemsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.loadBalancerIdInput"></a>

```go
func LoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerRuleSetConfig <a name="DataOciLoadBalancerRuleSetConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

&dataociloadbalancerruleset.DataOciLoadBalancerRuleSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LoadBalancerId: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#load_balancer_id DataOciLoadBalancerRuleSet#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#name DataOciLoadBalancerRuleSet#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.loadBalancerId"></a>

```go
LoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#load_balancer_id DataOciLoadBalancerRuleSet#load_balancer_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_set#name DataOciLoadBalancerRuleSet#name}.

---

### DataOciLoadBalancerRuleSetItems <a name="DataOciLoadBalancerRuleSetItems" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

&dataociloadbalancerruleset.DataOciLoadBalancerRuleSetItems {

}
```


### DataOciLoadBalancerRuleSetItemsConditions <a name="DataOciLoadBalancerRuleSetItemsConditions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

&dataociloadbalancerruleset.DataOciLoadBalancerRuleSetItemsConditions {

}
```


### DataOciLoadBalancerRuleSetItemsIpMaxConnections <a name="DataOciLoadBalancerRuleSetItemsIpMaxConnections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnections.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

&dataociloadbalancerruleset.DataOciLoadBalancerRuleSetItemsIpMaxConnections {

}
```


### DataOciLoadBalancerRuleSetItemsRedirectUri <a name="DataOciLoadBalancerRuleSetItemsRedirectUri" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUri"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUri.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

&dataociloadbalancerruleset.DataOciLoadBalancerRuleSetItemsRedirectUri {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerRuleSetItemsConditionsList <a name="DataOciLoadBalancerRuleSetItemsConditionsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

dataociloadbalancerruleset.NewDataOciLoadBalancerRuleSetItemsConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoadBalancerRuleSetItemsConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.get"></a>

```go
func Get(index *f64) DataOciLoadBalancerRuleSetItemsConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoadBalancerRuleSetItemsConditionsOutputReference <a name="DataOciLoadBalancerRuleSetItemsConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

dataociloadbalancerruleset.NewDataOciLoadBalancerRuleSetItemsConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoadBalancerRuleSetItemsConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.attributeName">AttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditions">DataOciLoadBalancerRuleSetItemsConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.attributeName"></a>

```go
func AttributeName() *string
```

- *Type:* *string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.attributeValue"></a>

```go
func AttributeValue() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoadBalancerRuleSetItemsConditions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditions">DataOciLoadBalancerRuleSetItemsConditions</a>

---


### DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList <a name="DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

dataociloadbalancerruleset.NewDataOciLoadBalancerRuleSetItemsIpMaxConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.get"></a>

```go
func Get(index *f64) DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference <a name="DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

dataociloadbalancerruleset.NewDataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnections">DataOciLoadBalancerRuleSetItemsIpMaxConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoadBalancerRuleSetItemsIpMaxConnections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnections">DataOciLoadBalancerRuleSetItemsIpMaxConnections</a>

---


### DataOciLoadBalancerRuleSetItemsList <a name="DataOciLoadBalancerRuleSetItemsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

dataociloadbalancerruleset.NewDataOciLoadBalancerRuleSetItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoadBalancerRuleSetItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.get"></a>

```go
func Get(index *f64) DataOciLoadBalancerRuleSetItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoadBalancerRuleSetItemsOutputReference <a name="DataOciLoadBalancerRuleSetItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

dataociloadbalancerruleset.NewDataOciLoadBalancerRuleSetItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoadBalancerRuleSetItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.areInvalidCharactersAllowed">AreInvalidCharactersAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.conditions">Conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList">DataOciLoadBalancerRuleSetItemsConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.defaultMaxConnections">DefaultMaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.httpLargeHeaderSizeInKb">HttpLargeHeaderSizeInKb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.ipMaxConnections">IpMaxConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList">DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.redirectUri">RedirectUri</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList">DataOciLoadBalancerRuleSetItemsRedirectUriList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.responseCode">ResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItems">DataOciLoadBalancerRuleSetItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.allowedMethods"></a>

```go
func AllowedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AreInvalidCharactersAllowed`<sup>Required</sup> <a name="AreInvalidCharactersAllowed" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.areInvalidCharactersAllowed"></a>

```go
func AreInvalidCharactersAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.conditions"></a>

```go
func Conditions() DataOciLoadBalancerRuleSetItemsConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsConditionsList">DataOciLoadBalancerRuleSetItemsConditionsList</a>

---

##### `DefaultMaxConnections`<sup>Required</sup> <a name="DefaultMaxConnections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.defaultMaxConnections"></a>

```go
func DefaultMaxConnections() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `HttpLargeHeaderSizeInKb`<sup>Required</sup> <a name="HttpLargeHeaderSizeInKb" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.httpLargeHeaderSizeInKb"></a>

```go
func HttpLargeHeaderSizeInKb() *f64
```

- *Type:* *f64

---

##### `IpMaxConnections`<sup>Required</sup> <a name="IpMaxConnections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.ipMaxConnections"></a>

```go
func IpMaxConnections() DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList">DataOciLoadBalancerRuleSetItemsIpMaxConnectionsList</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.redirectUri"></a>

```go
func RedirectUri() DataOciLoadBalancerRuleSetItemsRedirectUriList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList">DataOciLoadBalancerRuleSetItemsRedirectUriList</a>

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.responseCode"></a>

```go
func ResponseCode() *f64
```

- *Type:* *f64

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoadBalancerRuleSetItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItems">DataOciLoadBalancerRuleSetItems</a>

---


### DataOciLoadBalancerRuleSetItemsRedirectUriList <a name="DataOciLoadBalancerRuleSetItemsRedirectUriList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

dataociloadbalancerruleset.NewDataOciLoadBalancerRuleSetItemsRedirectUriList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoadBalancerRuleSetItemsRedirectUriList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.get"></a>

```go
func Get(index *f64) DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference <a name="DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerruleset"

dataociloadbalancerruleset.NewDataOciLoadBalancerRuleSetItemsRedirectUriOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUri">DataOciLoadBalancerRuleSetItemsRedirectUri</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUriOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoadBalancerRuleSetItemsRedirectUri
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSet.DataOciLoadBalancerRuleSetItemsRedirectUri">DataOciLoadBalancerRuleSetItemsRedirectUri</a>

---



