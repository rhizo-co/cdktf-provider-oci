# `dataOciOspGatewaySubscriptions` Submodule <a name="`dataOciOspGatewaySubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewaySubscriptions <a name="DataOciOspGatewaySubscriptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions oci_osp_gateway_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptions(scope Construct, id *string, config DataOciOspGatewaySubscriptionsConfig) DataOciOspGatewaySubscriptions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig">DataOciOspGatewaySubscriptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig">DataOciOspGatewaySubscriptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewaySubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOspGatewaySubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOspGatewaySubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOspGatewaySubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewaySubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList">DataOciOspGatewaySubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.subscriptionCollection">SubscriptionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegionInput">OspHomeRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegion">OspHomeRegion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filter"></a>

```go
func Filter() DataOciOspGatewaySubscriptionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList">DataOciOspGatewaySubscriptionsFilterList</a>

---

##### `SubscriptionCollection`<sup>Required</sup> <a name="SubscriptionCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.subscriptionCollection"></a>

```go
func SubscriptionCollection() DataOciOspGatewaySubscriptionsSubscriptionCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OspHomeRegionInput`<sup>Optional</sup> <a name="OspHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegionInput"></a>

```go
func OspHomeRegionInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.ospHomeRegion"></a>

```go
func OspHomeRegion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewaySubscriptionsConfig <a name="DataOciOspGatewaySubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	OspHomeRegion: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#compartment_id DataOciOspGatewaySubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.ospHomeRegion">OspHomeRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#osp_home_region DataOciOspGatewaySubscriptions#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#id DataOciOspGatewaySubscriptions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#compartment_id DataOciOspGatewaySubscriptions#compartment_id}.

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.ospHomeRegion"></a>

```go
OspHomeRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#osp_home_region DataOciOspGatewaySubscriptions#osp_home_region}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#filter DataOciOspGatewaySubscriptions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#id DataOciOspGatewaySubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewaySubscriptionsFilter <a name="DataOciOspGatewaySubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#name DataOciOspGatewaySubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#values DataOciOspGatewaySubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#regex DataOciOspGatewaySubscriptions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#name DataOciOspGatewaySubscriptions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#values DataOciOspGatewaySubscriptions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscriptions#regex DataOciOspGatewaySubscriptions#regex}.

---

### DataOciOspGatewaySubscriptionsSubscriptionCollection <a name="DataOciOspGatewaySubscriptionsSubscriptionCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection {

}
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItems <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems {

}
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress {

}
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway {

}
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData {

}
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions {

}
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription {

}
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress {

}
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway {

}
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData {

}
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions {

}
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo {

}
```


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

&dataociospgatewaysubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewaySubscriptionsFilterList <a name="DataOciOspGatewaySubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOspGatewaySubscriptionsFilterOutputReference <a name="DataOciOspGatewaySubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.addressKey">AddressKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.contributorClass">ContributorClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.county">County</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.departmentName">DepartmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalNumber">InternalNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.jobTitle">JobTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line1">Line1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line2">Line2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line3">Line3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line4">Line4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.municipalInscription">MunicipalInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.province">Province</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.stateInscription">StateInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetName">StreetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetNumber">StreetNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressKey`<sup>Required</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.addressKey"></a>

```go
func AddressKey() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `ContributorClass`<sup>Required</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.contributorClass"></a>

```go
func ContributorClass() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.county"></a>

```go
func County() *string
```

- *Type:* *string

---

##### `DepartmentName`<sup>Required</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.departmentName"></a>

```go
func DepartmentName() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `InternalNumber`<sup>Required</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalNumber"></a>

```go
func InternalNumber() *string
```

- *Type:* *string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.jobTitle"></a>

```go
func JobTitle() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Line1`<sup>Required</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line1"></a>

```go
func Line1() *string
```

- *Type:* *string

---

##### `Line2`<sup>Required</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line2"></a>

```go
func Line2() *string
```

- *Type:* *string

---

##### `Line3`<sup>Required</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line3"></a>

```go
func Line3() *string
```

- *Type:* *string

---

##### `Line4`<sup>Required</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.line4"></a>

```go
func Line4() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `MunicipalInscription`<sup>Required</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.municipalInscription"></a>

```go
func MunicipalInscription() *string
```

- *Type:* *string

---

##### `PhoneCountryCode`<sup>Required</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneCountryCode"></a>

```go
func PhoneCountryCode() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.province"></a>

```go
func Province() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateInscription`<sup>Required</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.stateInscription"></a>

```go
func StateInscription() *string
```

- *Type:* *string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetName"></a>

```go
func StreetName() *string
```

- *Type:* *string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.streetNumber"></a>

```go
func StreetNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddress</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.accountType">AccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billingAddress">BillingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billToCustAccountId">BillToCustAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.gsiOrgCode">GsiOrgCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.isIntentToPay">IsIntentToPay</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.ospHomeRegion">OspHomeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentGateway">PaymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentOptions">PaymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.planType">PlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctRoleId">ShipToCustAcctRoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctSiteId">ShipToCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscription">Subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionPlanNumber">SubscriptionPlanNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.taxInfo">TaxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePersonalToCorporateConv">TimePersonalToCorporateConv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePlanUpgrade">TimePlanUpgrade</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeState">UpgradeState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeStateDetails">UpgradeStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems">DataOciOspGatewaySubscriptionsSubscriptionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.accountType"></a>

```go
func AccountType() *string
```

- *Type:* *string

---

##### `BillingAddress`<sup>Required</sup> <a name="BillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billingAddress"></a>

```go
func BillingAddress() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsBillingAddressList</a>

---

##### `BillToCustAccountId`<sup>Required</sup> <a name="BillToCustAccountId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.billToCustAccountId"></a>

```go
func BillToCustAccountId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `GsiOrgCode`<sup>Required</sup> <a name="GsiOrgCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.gsiOrgCode"></a>

```go
func GsiOrgCode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.isIntentToPay"></a>

```go
func IsIntentToPay() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.ospHomeRegion"></a>

```go
func OspHomeRegion() *string
```

- *Type:* *string

---

##### `PaymentGateway`<sup>Required</sup> <a name="PaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentGateway"></a>

```go
func PaymentGateway() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList</a>

---

##### `PaymentOptions`<sup>Required</sup> <a name="PaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.paymentOptions"></a>

```go
func PaymentOptions() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList</a>

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.planType"></a>

```go
func PlanType() *string
```

- *Type:* *string

---

##### `ShipToCustAcctRoleId`<sup>Required</sup> <a name="ShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctRoleId"></a>

```go
func ShipToCustAcctRoleId() *string
```

- *Type:* *string

---

##### `ShipToCustAcctSiteId`<sup>Required</sup> <a name="ShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.shipToCustAcctSiteId"></a>

```go
func ShipToCustAcctSiteId() *string
```

- *Type:* *string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscription"></a>

```go
func Subscription() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList</a>

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `SubscriptionPlanNumber`<sup>Required</sup> <a name="SubscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.subscriptionPlanNumber"></a>

```go
func SubscriptionPlanNumber() *string
```

- *Type:* *string

---

##### `TaxInfo`<sup>Required</sup> <a name="TaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.taxInfo"></a>

```go
func TaxInfo() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList</a>

---

##### `TimePersonalToCorporateConv`<sup>Required</sup> <a name="TimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePersonalToCorporateConv"></a>

```go
func TimePersonalToCorporateConv() *string
```

- *Type:* *string

---

##### `TimePlanUpgrade`<sup>Required</sup> <a name="TimePlanUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timePlanUpgrade"></a>

```go
func TimePlanUpgrade() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `UpgradeState`<sup>Required</sup> <a name="UpgradeState" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeState"></a>

```go
func UpgradeState() *string
```

- *Type:* *string

---

##### `UpgradeStateDetails`<sup>Required</sup> <a name="UpgradeStateDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.upgradeStateDetails"></a>

```go
func UpgradeStateDetails() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionsSubscriptionCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItems">DataOciOspGatewaySubscriptionsSubscriptionCollectionItems</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">CloudAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">PromoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudAccountName`<sup>Required</sup> <a name="CloudAccountName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```go
func CloudAccountName() *string
```

- *Type:* *string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```go
func PromoType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedData</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.merchantDefinedData">MerchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MerchantDefinedData`<sup>Required</sup> <a name="MerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```go
func MerchantDefinedData() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayMerchantDefinedDataList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentGateway</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creditCardType">CreditCardType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.extBillingAgreementId">ExtBillingAgreementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastDigits">LastDigits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.nameOnCard">NameOnCard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.paymentMethod">PaymentMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.timeExpiration">TimeExpiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletInstrumentId">WalletInstrumentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletTransactionId">WalletTransactionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreditCardType`<sup>Required</sup> <a name="CreditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.creditCardType"></a>

```go
func CreditCardType() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `ExtBillingAgreementId`<sup>Required</sup> <a name="ExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```go
func ExtBillingAgreementId() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastDigits`<sup>Required</sup> <a name="LastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastDigits"></a>

```go
func LastDigits() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `NameOnCard`<sup>Required</sup> <a name="NameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.nameOnCard"></a>

```go
func NameOnCard() *string
```

- *Type:* *string

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.paymentMethod"></a>

```go
func PaymentMethod() *string
```

- *Type:* *string

---

##### `TimeExpiration`<sup>Required</sup> <a name="TimeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.timeExpiration"></a>

```go
func TimeExpiration() *string
```

- *Type:* *string

---

##### `WalletInstrumentId`<sup>Required</sup> <a name="WalletInstrumentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```go
func WalletInstrumentId() *string
```

- *Type:* *string

---

##### `WalletTransactionId`<sup>Required</sup> <a name="WalletTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.walletTransactionId"></a>

```go
func WalletTransactionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsPaymentOptions</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.addressKey">AddressKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.contributorClass">ContributorClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.county">County</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.departmentName">DepartmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalNumber">InternalNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.jobTitle">JobTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line1">Line1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line2">Line2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line3">Line3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line4">Line4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.municipalInscription">MunicipalInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.province">Province</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.stateInscription">StateInscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetName">StreetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetNumber">StreetNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressKey`<sup>Required</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.addressKey"></a>

```go
func AddressKey() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `ContributorClass`<sup>Required</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```go
func ContributorClass() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.county"></a>

```go
func County() *string
```

- *Type:* *string

---

##### `DepartmentName`<sup>Required</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.departmentName"></a>

```go
func DepartmentName() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `InternalNumber`<sup>Required</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```go
func InternalNumber() *string
```

- *Type:* *string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```go
func JobTitle() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Line1`<sup>Required</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line1"></a>

```go
func Line1() *string
```

- *Type:* *string

---

##### `Line2`<sup>Required</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line2"></a>

```go
func Line2() *string
```

- *Type:* *string

---

##### `Line3`<sup>Required</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line3"></a>

```go
func Line3() *string
```

- *Type:* *string

---

##### `Line4`<sup>Required</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.line4"></a>

```go
func Line4() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `MunicipalInscription`<sup>Required</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```go
func MunicipalInscription() *string
```

- *Type:* *string

---

##### `PhoneCountryCode`<sup>Required</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```go
func PhoneCountryCode() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.province"></a>

```go
func Province() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateInscription`<sup>Required</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```go
func StateInscription() *string
```

- *Type:* *string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetName"></a>

```go
func StreetName() *string
```

- *Type:* *string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```go
func StreetNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddress</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.accountType">AccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billingAddress">BillingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billToCustAccountId">BillToCustAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.gsiOrgCode">GsiOrgCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.isIntentToPay">IsIntentToPay</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentGateway">PaymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentOptions">PaymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.planType">PlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctRoleId">ShipToCustAcctRoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctSiteId">ShipToCustAcctSiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.subscriptionPlanNumber">SubscriptionPlanNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.taxInfo">TaxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePersonalToCorporateConv">TimePersonalToCorporateConv</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePlanUpgrade">TimePlanUpgrade</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeState">UpgradeState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeStateDetails">UpgradeStateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.accountType"></a>

```go
func AccountType() *string
```

- *Type:* *string

---

##### `BillingAddress`<sup>Required</sup> <a name="BillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billingAddress"></a>

```go
func BillingAddress() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionBillingAddressList</a>

---

##### `BillToCustAccountId`<sup>Required</sup> <a name="BillToCustAccountId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.billToCustAccountId"></a>

```go
func BillToCustAccountId() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `GsiOrgCode`<sup>Required</sup> <a name="GsiOrgCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.gsiOrgCode"></a>

```go
func GsiOrgCode() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.isIntentToPay"></a>

```go
func IsIntentToPay() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `PaymentGateway`<sup>Required</sup> <a name="PaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentGateway"></a>

```go
func PaymentGateway() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList</a>

---

##### `PaymentOptions`<sup>Required</sup> <a name="PaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.paymentOptions"></a>

```go
func PaymentOptions() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList</a>

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.planType"></a>

```go
func PlanType() *string
```

- *Type:* *string

---

##### `ShipToCustAcctRoleId`<sup>Required</sup> <a name="ShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctRoleId"></a>

```go
func ShipToCustAcctRoleId() *string
```

- *Type:* *string

---

##### `ShipToCustAcctSiteId`<sup>Required</sup> <a name="ShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.shipToCustAcctSiteId"></a>

```go
func ShipToCustAcctSiteId() *string
```

- *Type:* *string

---

##### `SubscriptionPlanNumber`<sup>Required</sup> <a name="SubscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.subscriptionPlanNumber"></a>

```go
func SubscriptionPlanNumber() *string
```

- *Type:* *string

---

##### `TaxInfo`<sup>Required</sup> <a name="TaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.taxInfo"></a>

```go
func TaxInfo() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList</a>

---

##### `TimePersonalToCorporateConv`<sup>Required</sup> <a name="TimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePersonalToCorporateConv"></a>

```go
func TimePersonalToCorporateConv() *string
```

- *Type:* *string

---

##### `TimePlanUpgrade`<sup>Required</sup> <a name="TimePlanUpgrade" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timePlanUpgrade"></a>

```go
func TimePlanUpgrade() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `UpgradeState`<sup>Required</sup> <a name="UpgradeState" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeState"></a>

```go
func UpgradeState() *string
```

- *Type:* *string

---

##### `UpgradeStateDetails`<sup>Required</sup> <a name="UpgradeStateDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.upgradeStateDetails"></a>

```go
func UpgradeStateDetails() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscription</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">CloudAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">PromoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudAccountName`<sup>Required</sup> <a name="CloudAccountName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```go
func CloudAccountName() *string
```

- *Type:* *string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```go
func PromoType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedData</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">MerchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MerchantDefinedData`<sup>Required</sup> <a name="MerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```go
func MerchantDefinedData() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayMerchantDefinedDataList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentGateway</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creditCardType">CreditCardType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">ExtBillingAgreementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastDigits">LastDigits</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.nameOnCard">NameOnCard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.paymentMethod">PaymentMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.timeExpiration">TimeExpiration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">WalletInstrumentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletTransactionId">WalletTransactionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreditCardType`<sup>Required</sup> <a name="CreditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```go
func CreditCardType() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `ExtBillingAgreementId`<sup>Required</sup> <a name="ExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```go
func ExtBillingAgreementId() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastDigits`<sup>Required</sup> <a name="LastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```go
func LastDigits() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `NameOnCard`<sup>Required</sup> <a name="NameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```go
func NameOnCard() *string
```

- *Type:* *string

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```go
func PaymentMethod() *string
```

- *Type:* *string

---

##### `TimeExpiration`<sup>Required</sup> <a name="TimeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```go
func TimeExpiration() *string
```

- *Type:* *string

---

##### `WalletInstrumentId`<sup>Required</sup> <a name="WalletInstrumentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```go
func WalletInstrumentId() *string
```

- *Type:* *string

---

##### `WalletTransactionId`<sup>Required</sup> <a name="WalletTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```go
func WalletTransactionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionPaymentOptions</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCode">NoTaxReasonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">NoTaxReasonCodeDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxCnpj">TaxCnpj</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxPayerId">TaxPayerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxRegNumber">TaxRegNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NoTaxReasonCode`<sup>Required</sup> <a name="NoTaxReasonCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```go
func NoTaxReasonCode() *string
```

- *Type:* *string

---

##### `NoTaxReasonCodeDetails`<sup>Required</sup> <a name="NoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```go
func NoTaxReasonCodeDetails() *string
```

- *Type:* *string

---

##### `TaxCnpj`<sup>Required</sup> <a name="TaxCnpj" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```go
func TaxCnpj() *string
```

- *Type:* *string

---

##### `TaxPayerId`<sup>Required</sup> <a name="TaxPayerId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```go
func TaxPayerId() *string
```

- *Type:* *string

---

##### `TaxRegNumber`<sup>Required</sup> <a name="TaxRegNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```go
func TaxRegNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsSubscriptionTaxInfo</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.giro">Giro</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCode">NoTaxReasonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCodeDetails">NoTaxReasonCodeDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxCnpj">TaxCnpj</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxPayerId">TaxPayerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxRegNumber">TaxRegNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Giro`<sup>Required</sup> <a name="Giro" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.giro"></a>

```go
func Giro() *string
```

- *Type:* *string

---

##### `NoTaxReasonCode`<sup>Required</sup> <a name="NoTaxReasonCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCode"></a>

```go
func NoTaxReasonCode() *string
```

- *Type:* *string

---

##### `NoTaxReasonCodeDetails`<sup>Required</sup> <a name="NoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```go
func NoTaxReasonCodeDetails() *string
```

- *Type:* *string

---

##### `TaxCnpj`<sup>Required</sup> <a name="TaxCnpj" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxCnpj"></a>

```go
func TaxCnpj() *string
```

- *Type:* *string

---

##### `TaxPayerId`<sup>Required</sup> <a name="TaxPayerId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxPayerId"></a>

```go
func TaxPayerId() *string
```

- *Type:* *string

---

##### `TaxRegNumber`<sup>Required</sup> <a name="TaxRegNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.taxRegNumber"></a>

```go
func TaxRegNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsTaxInfo</a>

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionList <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.get"></a>

```go
func Get(index *f64) DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference <a name="DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociospgatewaysubscriptions"

dataociospgatewaysubscriptions.NewDataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection">DataOciOspGatewaySubscriptionsSubscriptionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList">DataOciOspGatewaySubscriptionsSubscriptionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOspGatewaySubscriptionsSubscriptionCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscriptions.DataOciOspGatewaySubscriptionsSubscriptionCollection">DataOciOspGatewaySubscriptionsSubscriptionCollection</a>

---



