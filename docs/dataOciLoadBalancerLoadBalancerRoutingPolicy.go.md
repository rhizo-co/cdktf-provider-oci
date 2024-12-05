# `dataOciLoadBalancerLoadBalancerRoutingPolicy` Submodule <a name="`dataOciLoadBalancerLoadBalancerRoutingPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerLoadBalancerRoutingPolicy <a name="DataOciLoadBalancerLoadBalancerRoutingPolicy" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy oci_load_balancer_load_balancer_routing_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancerroutingpolicy"

dataociloadbalancerloadbalancerroutingpolicy.NewDataOciLoadBalancerLoadBalancerRoutingPolicy(scope Construct, id *string, config DataOciLoadBalancerLoadBalancerRoutingPolicyConfig) DataOciLoadBalancerLoadBalancerRoutingPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig">DataOciLoadBalancerLoadBalancerRoutingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig">DataOciLoadBalancerLoadBalancerRoutingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancerRoutingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancerroutingpolicy"

dataociloadbalancerloadbalancerroutingpolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancerroutingpolicy"

dataociloadbalancerloadbalancerroutingpolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancerroutingpolicy"

dataociloadbalancerloadbalancerroutingpolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancerroutingpolicy"

dataociloadbalancerloadbalancerroutingpolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancerRoutingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLoadBalancerLoadBalancerRoutingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLoadBalancerLoadBalancerRoutingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerLoadBalancerRoutingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersion">ConditionLanguageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.routingPolicyNameInput">RoutingPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.routingPolicyName">RoutingPolicyName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ConditionLanguageVersion`<sup>Required</sup> <a name="ConditionLanguageVersion" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.conditionLanguageVersion"></a>

```go
func ConditionLanguageVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.rules"></a>

```go
func Rules() DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerIdInput"></a>

```go
func LoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `RoutingPolicyNameInput`<sup>Optional</sup> <a name="RoutingPolicyNameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.routingPolicyNameInput"></a>

```go
func RoutingPolicyNameInput() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `RoutingPolicyName`<sup>Required</sup> <a name="RoutingPolicyName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.routingPolicyName"></a>

```go
func RoutingPolicyName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerLoadBalancerRoutingPolicyConfig <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancerroutingpolicy"

&dataociloadbalancerloadbalancerroutingpolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LoadBalancerId: *string,
	RoutingPolicyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#load_balancer_id DataOciLoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.routingPolicyName">RoutingPolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#routing_policy_name DataOciLoadBalancerLoadBalancerRoutingPolicy#routing_policy_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.loadBalancerId"></a>

```go
LoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#load_balancer_id DataOciLoadBalancerLoadBalancerRoutingPolicy#load_balancer_id}.

---

##### `RoutingPolicyName`<sup>Required</sup> <a name="RoutingPolicyName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyConfig.property.routingPolicyName"></a>

```go
RoutingPolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancer_routing_policy#routing_policy_name DataOciLoadBalancerLoadBalancerRoutingPolicy#routing_policy_name}.

---

### DataOciLoadBalancerLoadBalancerRoutingPolicyRules <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancerroutingpolicy"

&dataociloadbalancerloadbalancerroutingpolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules {

}
```


### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancerroutingpolicy"

&dataociloadbalancerloadbalancerroutingpolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancerroutingpolicy"

dataociloadbalancerloadbalancerroutingpolicy.NewDataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get"></a>

```go
func Get(index *f64) DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancerroutingpolicy"

dataociloadbalancerloadbalancerroutingpolicy.NewDataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetName">BackendSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendSetName`<sup>Required</sup> <a name="BackendSetName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.backendSetName"></a>

```go
func BackendSetName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActions</a>

---


### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancerroutingpolicy"

dataociloadbalancerloadbalancerroutingpolicy.NewDataOciLoadBalancerLoadBalancerRoutingPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.get"></a>

```go
func Get(index *f64) DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference <a name="DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancerroutingpolicy"

dataociloadbalancerloadbalancerroutingpolicy.NewDataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actions">Actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules">DataOciLoadBalancerLoadBalancerRoutingPolicyRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.actions"></a>

```go
func Actions() DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList">DataOciLoadBalancerLoadBalancerRoutingPolicyRulesActionsList</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoadBalancerLoadBalancerRoutingPolicyRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancerRoutingPolicy.DataOciLoadBalancerLoadBalancerRoutingPolicyRules">DataOciLoadBalancerLoadBalancerRoutingPolicyRules</a>

---



