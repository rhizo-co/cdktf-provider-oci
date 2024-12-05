# `dataOciLoadBalancerLoadBalancers` Submodule <a name="`dataOciLoadBalancerLoadBalancers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerLoadBalancers <a name="DataOciLoadBalancerLoadBalancers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers oci_load_balancer_load_balancers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.NewDataOciLoadBalancerLoadBalancers(scope Construct, id *string, config DataOciLoadBalancerLoadBalancersConfig) DataOciLoadBalancerLoadBalancers
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig">DataOciLoadBalancerLoadBalancersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig">DataOciLoadBalancerLoadBalancersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetDetail">ResetDetail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDetail` <a name="ResetDetail" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetDetail"></a>

```go
func ResetDetail()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.DataOciLoadBalancerLoadBalancers_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.DataOciLoadBalancerLoadBalancers_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.DataOciLoadBalancerLoadBalancers_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.DataOciLoadBalancerLoadBalancers_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLoadBalancerLoadBalancers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLoadBalancerLoadBalancers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerLoadBalancers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList">DataOciLoadBalancerLoadBalancersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.loadBalancers">LoadBalancers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList">DataOciLoadBalancerLoadBalancersLoadBalancersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.detailInput">DetailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.detail">Detail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.filter"></a>

```go
func Filter() DataOciLoadBalancerLoadBalancersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList">DataOciLoadBalancerLoadBalancersFilterList</a>

---

##### `LoadBalancers`<sup>Required</sup> <a name="LoadBalancers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.loadBalancers"></a>

```go
func LoadBalancers() DataOciLoadBalancerLoadBalancersLoadBalancersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList">DataOciLoadBalancerLoadBalancersLoadBalancersList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DetailInput`<sup>Optional</sup> <a name="DetailInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.detailInput"></a>

```go
func DetailInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.detail"></a>

```go
func Detail() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerLoadBalancersConfig <a name="DataOciLoadBalancerLoadBalancersConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

&dataociloadbalancerloadbalancers.DataOciLoadBalancerLoadBalancersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Detail: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#compartment_id DataOciLoadBalancerLoadBalancers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.detail">Detail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#detail DataOciLoadBalancerLoadBalancers#detail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#display_name DataOciLoadBalancerLoadBalancers#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#id DataOciLoadBalancerLoadBalancers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#state DataOciLoadBalancerLoadBalancers#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#compartment_id DataOciLoadBalancerLoadBalancers#compartment_id}.

---

##### `Detail`<sup>Optional</sup> <a name="Detail" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.detail"></a>

```go
Detail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#detail DataOciLoadBalancerLoadBalancers#detail}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#display_name DataOciLoadBalancerLoadBalancers#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#filter DataOciLoadBalancerLoadBalancers#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#id DataOciLoadBalancerLoadBalancers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#state DataOciLoadBalancerLoadBalancers#state}.

---

### DataOciLoadBalancerLoadBalancersFilter <a name="DataOciLoadBalancerLoadBalancersFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

&dataociloadbalancerloadbalancers.DataOciLoadBalancerLoadBalancersFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#name DataOciLoadBalancerLoadBalancers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#values DataOciLoadBalancerLoadBalancers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#regex DataOciLoadBalancerLoadBalancers#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#name DataOciLoadBalancerLoadBalancers#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#values DataOciLoadBalancerLoadBalancers#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#regex DataOciLoadBalancerLoadBalancers#regex}.

---

### DataOciLoadBalancerLoadBalancersLoadBalancers <a name="DataOciLoadBalancerLoadBalancersLoadBalancers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

&dataociloadbalancerloadbalancers.DataOciLoadBalancerLoadBalancersLoadBalancers {

}
```


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

&dataociloadbalancerloadbalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails {

}
```


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

&dataociloadbalancerloadbalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp {

}
```


### DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps <a name="DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

&dataociloadbalancerloadbalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps {

}
```


### DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails <a name="DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

&dataociloadbalancerloadbalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerLoadBalancersFilterList <a name="DataOciLoadBalancerLoadBalancersFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.NewDataOciLoadBalancerLoadBalancersFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoadBalancerLoadBalancersFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.get"></a>

```go
func Get(index *f64) DataOciLoadBalancerLoadBalancersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciLoadBalancerLoadBalancersFilterOutputReference <a name="DataOciLoadBalancerLoadBalancersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.NewDataOciLoadBalancerLoadBalancersFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoadBalancerLoadBalancersFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.NewDataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.get"></a>

```go
func Get(index *f64) DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.NewDataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.isPublic">IsPublic</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.reservedIp">ReservedIp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.isPublic"></a>

```go
func IsPublic() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ReservedIp`<sup>Required</sup> <a name="ReservedIp" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.reservedIp"></a>

```go
func ReservedIp() DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails</a>

---


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.NewDataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.get"></a>

```go
func Get(index *f64) DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.NewDataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp</a>

---


### DataOciLoadBalancerLoadBalancersLoadBalancersList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.NewDataOciLoadBalancerLoadBalancersLoadBalancersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoadBalancerLoadBalancersLoadBalancersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.get"></a>

```go
func Get(index *f64) DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.NewDataOciLoadBalancerLoadBalancersLoadBalancersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipAddressDetails">IpAddressDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipMode">IpMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isDeleteProtectionEnabled">IsDeleteProtectionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isPrivate">IsPrivate</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isRequestIdEnabled">IsRequestIdEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.networkSecurityGroupIds">NetworkSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.requestIdHeader">RequestIdHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.reservedIps">ReservedIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList">DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.shapeDetails">ShapeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList">DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancers">DataOciLoadBalancerLoadBalancersLoadBalancers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddressDetails`<sup>Required</sup> <a name="IpAddressDetails" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipAddressDetails"></a>

```go
func IpAddressDetails() DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList</a>

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `IpMode`<sup>Required</sup> <a name="IpMode" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipMode"></a>

```go
func IpMode() *string
```

- *Type:* *string

---

##### `IsDeleteProtectionEnabled`<sup>Required</sup> <a name="IsDeleteProtectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isDeleteProtectionEnabled"></a>

```go
func IsDeleteProtectionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isPrivate"></a>

```go
func IsPrivate() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRequestIdEnabled`<sup>Required</sup> <a name="IsRequestIdEnabled" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isRequestIdEnabled"></a>

```go
func IsRequestIdEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NetworkSecurityGroupIds`<sup>Required</sup> <a name="NetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.networkSecurityGroupIds"></a>

```go
func NetworkSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `RequestIdHeader`<sup>Required</sup> <a name="RequestIdHeader" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.requestIdHeader"></a>

```go
func RequestIdHeader() *string
```

- *Type:* *string

---

##### `ReservedIps`<sup>Required</sup> <a name="ReservedIps" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.reservedIps"></a>

```go
func ReservedIps() DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList">DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList</a>

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `ShapeDetails`<sup>Required</sup> <a name="ShapeDetails" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.shapeDetails"></a>

```go
func ShapeDetails() DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList">DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoadBalancerLoadBalancersLoadBalancers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancers">DataOciLoadBalancerLoadBalancersLoadBalancers</a>

---


### DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.NewDataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.get"></a>

```go
func Get(index *f64) DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.NewDataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps">DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps">DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps</a>

---


### DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.NewDataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.get"></a>

```go
func Get(index *f64) DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloadbalancerloadbalancers"

dataociloadbalancerloadbalancers.NewDataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.maximumBandwidthInMbps">MaximumBandwidthInMbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.minimumBandwidthInMbps">MinimumBandwidthInMbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails">DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumBandwidthInMbps`<sup>Required</sup> <a name="MaximumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.maximumBandwidthInMbps"></a>

```go
func MaximumBandwidthInMbps() *f64
```

- *Type:* *f64

---

##### `MinimumBandwidthInMbps`<sup>Required</sup> <a name="MinimumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.minimumBandwidthInMbps"></a>

```go
func MinimumBandwidthInMbps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails">DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails</a>

---



