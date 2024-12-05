# `dataOciApigatewayUsagePlans` Submodule <a name="`dataOciApigatewayUsagePlans` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApigatewayUsagePlans <a name="DataOciApigatewayUsagePlans" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans oci_apigateway_usage_plans}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlans(scope Construct, id *string, config DataOciApigatewayUsagePlansConfig) DataOciApigatewayUsagePlans
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig">DataOciApigatewayUsagePlansConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig">DataOciApigatewayUsagePlansConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApigatewayUsagePlans resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.DataOciApigatewayUsagePlans_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.DataOciApigatewayUsagePlans_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.DataOciApigatewayUsagePlans_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.DataOciApigatewayUsagePlans_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciApigatewayUsagePlans resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciApigatewayUsagePlans to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciApigatewayUsagePlans that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApigatewayUsagePlans to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList">DataOciApigatewayUsagePlansFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.usagePlanCollection">UsagePlanCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList">DataOciApigatewayUsagePlansUsagePlanCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.filter"></a>

```go
func Filter() DataOciApigatewayUsagePlansFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList">DataOciApigatewayUsagePlansFilterList</a>

---

##### `UsagePlanCollection`<sup>Required</sup> <a name="UsagePlanCollection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.usagePlanCollection"></a>

```go
func UsagePlanCollection() DataOciApigatewayUsagePlansUsagePlanCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList">DataOciApigatewayUsagePlansUsagePlanCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApigatewayUsagePlansConfig <a name="DataOciApigatewayUsagePlansConfig" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

&dataociapigatewayusageplans.DataOciApigatewayUsagePlansConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#compartment_id DataOciApigatewayUsagePlans#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#display_name DataOciApigatewayUsagePlans#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#id DataOciApigatewayUsagePlans#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#state DataOciApigatewayUsagePlans#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#compartment_id DataOciApigatewayUsagePlans#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#display_name DataOciApigatewayUsagePlans#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#filter DataOciApigatewayUsagePlans#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#id DataOciApigatewayUsagePlans#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#state DataOciApigatewayUsagePlans#state}.

---

### DataOciApigatewayUsagePlansFilter <a name="DataOciApigatewayUsagePlansFilter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

&dataociapigatewayusageplans.DataOciApigatewayUsagePlansFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#name DataOciApigatewayUsagePlans#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#values DataOciApigatewayUsagePlans#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#regex DataOciApigatewayUsagePlans#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#name DataOciApigatewayUsagePlans#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#values DataOciApigatewayUsagePlans#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#regex DataOciApigatewayUsagePlans#regex}.

---

### DataOciApigatewayUsagePlansUsagePlanCollection <a name="DataOciApigatewayUsagePlansUsagePlanCollection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

&dataociapigatewayusageplans.DataOciApigatewayUsagePlansUsagePlanCollection {

}
```


### DataOciApigatewayUsagePlansUsagePlanCollectionItems <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

&dataociapigatewayusageplans.DataOciApigatewayUsagePlansUsagePlanCollectionItems {

}
```


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

&dataociapigatewayusageplans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements {

}
```


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

&dataociapigatewayusageplans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota {

}
```


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

&dataociapigatewayusageplans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit {

}
```


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

&dataociapigatewayusageplans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApigatewayUsagePlansFilterList <a name="DataOciApigatewayUsagePlansFilterList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApigatewayUsagePlansFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.get"></a>

```go
func Get(index *f64) DataOciApigatewayUsagePlansFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciApigatewayUsagePlansFilterOutputReference <a name="DataOciApigatewayUsagePlansFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApigatewayUsagePlansFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.get"></a>

```go
func Get(index *f64) DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.quota">Quota</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.rateLimit">RateLimit</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.targets">Targets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.quota"></a>

```go
func Quota() DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList</a>

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.rateLimit"></a>

```go
func RateLimit() DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.targets"></a>

```go
func Targets() DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements</a>

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.get"></a>

```go
func Get(index *f64) DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.operationOnBreach">OperationOnBreach</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.resetPolicy">ResetPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperationOnBreach`<sup>Required</sup> <a name="OperationOnBreach" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.operationOnBreach"></a>

```go
func OperationOnBreach() *string
```

- *Type:* *string

---

##### `ResetPolicy`<sup>Required</sup> <a name="ResetPolicy" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.resetPolicy"></a>

```go
func ResetPolicy() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota</a>

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.get"></a>

```go
func Get(index *f64) DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit</a>

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.get"></a>

```go
func Get(index *f64) DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets</a>

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsList <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansUsagePlanCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApigatewayUsagePlansUsagePlanCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.entitlements">Entitlements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItems">DataOciApigatewayUsagePlansUsagePlanCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Entitlements`<sup>Required</sup> <a name="Entitlements" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.entitlements"></a>

```go
func Entitlements() DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApigatewayUsagePlansUsagePlanCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItems">DataOciApigatewayUsagePlansUsagePlanCollectionItems</a>

---


### DataOciApigatewayUsagePlansUsagePlanCollectionList <a name="DataOciApigatewayUsagePlansUsagePlanCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansUsagePlanCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApigatewayUsagePlansUsagePlanCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.get"></a>

```go
func Get(index *f64) DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference <a name="DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapigatewayusageplans"

dataociapigatewayusageplans.NewDataOciApigatewayUsagePlansUsagePlanCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollection">DataOciApigatewayUsagePlansUsagePlanCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.items"></a>

```go
func Items() DataOciApigatewayUsagePlansUsagePlanCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApigatewayUsagePlansUsagePlanCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollection">DataOciApigatewayUsagePlansUsagePlanCollection</a>

---



