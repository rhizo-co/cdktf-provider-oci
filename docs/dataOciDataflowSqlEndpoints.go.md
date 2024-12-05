# `dataOciDataflowSqlEndpoints` Submodule <a name="`dataOciDataflowSqlEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataflowSqlEndpoints <a name="DataOciDataflowSqlEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints oci_dataflow_sql_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpoints(scope Construct, id *string, config DataOciDataflowSqlEndpointsConfig) DataOciDataflowSqlEndpoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig">DataOciDataflowSqlEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig">DataOciDataflowSqlEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetSqlEndpointId">ResetSqlEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetId"></a>

```go
func ResetId()
```

##### `ResetSqlEndpointId` <a name="ResetSqlEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetSqlEndpointId"></a>

```go
func ResetSqlEndpointId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataflowSqlEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.DataOciDataflowSqlEndpoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.DataOciDataflowSqlEndpoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.DataOciDataflowSqlEndpoints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.DataOciDataflowSqlEndpoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataflowSqlEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataflowSqlEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataflowSqlEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataflowSqlEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList">DataOciDataflowSqlEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.sqlEndpointCollection">SqlEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList">DataOciDataflowSqlEndpointsSqlEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.sqlEndpointIdInput">SqlEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.sqlEndpointId">SqlEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.filter"></a>

```go
func Filter() DataOciDataflowSqlEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList">DataOciDataflowSqlEndpointsFilterList</a>

---

##### `SqlEndpointCollection`<sup>Required</sup> <a name="SqlEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.sqlEndpointCollection"></a>

```go
func SqlEndpointCollection() DataOciDataflowSqlEndpointsSqlEndpointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList">DataOciDataflowSqlEndpointsSqlEndpointCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SqlEndpointIdInput`<sup>Optional</sup> <a name="SqlEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.sqlEndpointIdInput"></a>

```go
func SqlEndpointIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SqlEndpointId`<sup>Required</sup> <a name="SqlEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.sqlEndpointId"></a>

```go
func SqlEndpointId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataflowSqlEndpointsConfig <a name="DataOciDataflowSqlEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

&dataocidataflowsqlendpoints.DataOciDataflowSqlEndpointsConfig {
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
	SqlEndpointId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#compartment_id DataOciDataflowSqlEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#display_name DataOciDataflowSqlEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#id DataOciDataflowSqlEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.sqlEndpointId">SqlEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#sql_endpoint_id DataOciDataflowSqlEndpoints#sql_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#state DataOciDataflowSqlEndpoints#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#compartment_id DataOciDataflowSqlEndpoints#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#display_name DataOciDataflowSqlEndpoints#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#filter DataOciDataflowSqlEndpoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#id DataOciDataflowSqlEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SqlEndpointId`<sup>Optional</sup> <a name="SqlEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.sqlEndpointId"></a>

```go
SqlEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#sql_endpoint_id DataOciDataflowSqlEndpoints#sql_endpoint_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#state DataOciDataflowSqlEndpoints#state}.

---

### DataOciDataflowSqlEndpointsFilter <a name="DataOciDataflowSqlEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

&dataocidataflowsqlendpoints.DataOciDataflowSqlEndpointsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#name DataOciDataflowSqlEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#values DataOciDataflowSqlEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#regex DataOciDataflowSqlEndpoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#name DataOciDataflowSqlEndpoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#values DataOciDataflowSqlEndpoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataflow_sql_endpoints#regex DataOciDataflowSqlEndpoints#regex}.

---

### DataOciDataflowSqlEndpointsSqlEndpointCollection <a name="DataOciDataflowSqlEndpointsSqlEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

&dataocidataflowsqlendpoints.DataOciDataflowSqlEndpointsSqlEndpointCollection {

}
```


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItems <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

&dataocidataflowsqlendpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItems {

}
```


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

&dataocidataflowsqlendpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig {

}
```


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

&dataocidataflowsqlendpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig {

}
```


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

&dataocidataflowsqlendpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration {

}
```


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

&dataocidataflowsqlendpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataflowSqlEndpointsFilterList <a name="DataOciDataflowSqlEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowSqlEndpointsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataflowSqlEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataflowSqlEndpointsFilterOutputReference <a name="DataOciDataflowSqlEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowSqlEndpointsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfig</a>

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfig</a>

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.get"></a>

```go
func Get(index *f64) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.ipNotation">IpNotation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.vcnIps">VcnIps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpNotation`<sup>Required</sup> <a name="IpNotation" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.ipNotation"></a>

```go
func IpNotation() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `VcnIps`<sup>Required</sup> <a name="VcnIps" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.vcnIps"></a>

```go
func VcnIps() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRules</a>

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.get"></a>

```go
func Get(index *f64) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.accessControlRules">AccessControlRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.hostNamePrefix">HostNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.publicEndpointIp">PublicEndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessControlRules`<sup>Required</sup> <a name="AccessControlRules" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.accessControlRules"></a>

```go
func AccessControlRules() DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationAccessControlRulesList</a>

---

##### `HostNamePrefix`<sup>Required</sup> <a name="HostNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.hostNamePrefix"></a>

```go
func HostNamePrefix() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.privateEndpointIp"></a>

```go
func PrivateEndpointIp() *string
```

- *Type:* *string

---

##### `PublicEndpointIp`<sup>Required</sup> <a name="PublicEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.publicEndpointIp"></a>

```go
func PublicEndpointIp() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfiguration</a>

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.driverShape">DriverShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.driverShapeConfig">DriverShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.executorShape">ExecutorShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.executorShapeConfig">ExecutorShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.jdbcEndpointUrl">JdbcEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.lakeId">LakeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.maxExecutorCount">MaxExecutorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.minExecutorCount">MinExecutorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.sparkAdvancedConfigurations">SparkAdvancedConfigurations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.sqlEndpointVersion">SqlEndpointVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.warehouseBucketUri">WarehouseBucketUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItems">DataOciDataflowSqlEndpointsSqlEndpointCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DriverShape`<sup>Required</sup> <a name="DriverShape" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.driverShape"></a>

```go
func DriverShape() *string
```

- *Type:* *string

---

##### `DriverShapeConfig`<sup>Required</sup> <a name="DriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.driverShapeConfig"></a>

```go
func DriverShapeConfig() DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsDriverShapeConfigList</a>

---

##### `ExecutorShape`<sup>Required</sup> <a name="ExecutorShape" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.executorShape"></a>

```go
func ExecutorShape() *string
```

- *Type:* *string

---

##### `ExecutorShapeConfig`<sup>Required</sup> <a name="ExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.executorShapeConfig"></a>

```go
func ExecutorShapeConfig() DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsExecutorShapeConfigList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JdbcEndpointUrl`<sup>Required</sup> <a name="JdbcEndpointUrl" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.jdbcEndpointUrl"></a>

```go
func JdbcEndpointUrl() *string
```

- *Type:* *string

---

##### `LakeId`<sup>Required</sup> <a name="LakeId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.lakeId"></a>

```go
func LakeId() *string
```

- *Type:* *string

---

##### `MaxExecutorCount`<sup>Required</sup> <a name="MaxExecutorCount" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.maxExecutorCount"></a>

```go
func MaxExecutorCount() *f64
```

- *Type:* *f64

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `MinExecutorCount`<sup>Required</sup> <a name="MinExecutorCount" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.minExecutorCount"></a>

```go
func MinExecutorCount() *f64
```

- *Type:* *f64

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.networkConfiguration"></a>

```go
func NetworkConfiguration() DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsNetworkConfigurationList</a>

---

##### `SparkAdvancedConfigurations`<sup>Required</sup> <a name="SparkAdvancedConfigurations" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.sparkAdvancedConfigurations"></a>

```go
func SparkAdvancedConfigurations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SqlEndpointVersion`<sup>Required</sup> <a name="SqlEndpointVersion" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.sqlEndpointVersion"></a>

```go
func SqlEndpointVersion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `WarehouseBucketUri`<sup>Required</sup> <a name="WarehouseBucketUri" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.warehouseBucketUri"></a>

```go
func WarehouseBucketUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataflowSqlEndpointsSqlEndpointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItems">DataOciDataflowSqlEndpointsSqlEndpointCollectionItems</a>

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionList <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsSqlEndpointCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataflowSqlEndpointsSqlEndpointCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference <a name="DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataflowsqlendpoints"

dataocidataflowsqlendpoints.NewDataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollection">DataOciDataflowSqlEndpointsSqlEndpointCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList">DataOciDataflowSqlEndpointsSqlEndpointCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataflowSqlEndpointsSqlEndpointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataflowSqlEndpoints.DataOciDataflowSqlEndpointsSqlEndpointCollection">DataOciDataflowSqlEndpointsSqlEndpointCollection</a>

---



