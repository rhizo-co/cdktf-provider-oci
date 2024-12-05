# `dataOciSchServiceConnectors` Submodule <a name="`dataOciSchServiceConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSchServiceConnectors <a name="DataOciSchServiceConnectors" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors oci_sch_service_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectors(scope Construct, id *string, config DataOciSchServiceConnectorsConfig) DataOciSchServiceConnectors
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig">DataOciSchServiceConnectorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig">DataOciSchServiceConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSchServiceConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.DataOciSchServiceConnectors_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.DataOciSchServiceConnectors_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.DataOciSchServiceConnectors_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.DataOciSchServiceConnectors_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciSchServiceConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciSchServiceConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciSchServiceConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSchServiceConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList">DataOciSchServiceConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.serviceConnectorCollection">ServiceConnectorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList">DataOciSchServiceConnectorsServiceConnectorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.filter"></a>

```go
func Filter() DataOciSchServiceConnectorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList">DataOciSchServiceConnectorsFilterList</a>

---

##### `ServiceConnectorCollection`<sup>Required</sup> <a name="ServiceConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.serviceConnectorCollection"></a>

```go
func ServiceConnectorCollection() DataOciSchServiceConnectorsServiceConnectorCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList">DataOciSchServiceConnectorsServiceConnectorCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectors.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSchServiceConnectorsConfig <a name="DataOciSchServiceConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#compartment_id DataOciSchServiceConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#display_name DataOciSchServiceConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#id DataOciSchServiceConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#state DataOciSchServiceConnectors#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#compartment_id DataOciSchServiceConnectors#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#display_name DataOciSchServiceConnectors#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#filter DataOciSchServiceConnectors#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#id DataOciSchServiceConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#state DataOciSchServiceConnectors#state}.

---

### DataOciSchServiceConnectorsFilter <a name="DataOciSchServiceConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#name DataOciSchServiceConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#values DataOciSchServiceConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#regex DataOciSchServiceConnectors#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#name DataOciSchServiceConnectors#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#values DataOciSchServiceConnectors#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connectors#regex DataOciSchServiceConnectors#regex}.

---

### DataOciSchServiceConnectorsServiceConnectorCollection <a name="DataOciSchServiceConnectorsServiceConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsServiceConnectorCollection {

}
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItems <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems {

}
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource {

}
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor {

}
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources {

}
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources {

}
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails {

}
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces {

}
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics {

}
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget {

}
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions {

}
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue {

}
```


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

&dataocischserviceconnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSchServiceConnectorsFilterList <a name="DataOciSchServiceConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciSchServiceConnectorsFilterOutputReference <a name="DataOciSchServiceConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.lifecyleDetails">LifecyleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.tasks">Tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems">DataOciSchServiceConnectorsServiceConnectorCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.lifecyleDetails"></a>

```go
func LifecyleDetails() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.source"></a>

```go
func Source() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.target"></a>

```go
func Target() DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList</a>

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.tasks"></a>

```go
func Tasks() DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSchServiceConnectorsServiceConnectorCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItems">DataOciSchServiceConnectorsServiceConnectorCollectionItems</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursor</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.logId">LogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogId`<sup>Required</sup> <a name="LogId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.logId"></a>

```go
func LogId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSources</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics">Metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics"></a>

```go
func Metrics() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList</a>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespaces</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces">Namespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces"></a>

```go
func Namespaces() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsNamespacesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetails</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.namespaceDetails">NamespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `NamespaceDetails`<sup>Required</sup> <a name="NamespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.namespaceDetails"></a>

```go
func NamespaceDetails() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesNamespaceDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSources</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.configMap">ConfigMap</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.cursor">Cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.logSources">LogSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.monitoringSources">MonitoringSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigMap`<sup>Required</sup> <a name="ConfigMap" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.configMap"></a>

```go
func ConfigMap() *string
```

- *Type:* *string

---

##### `Cursor`<sup>Required</sup> <a name="Cursor" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.cursor"></a>

```go
func Cursor() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceCursorList</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `LogSources`<sup>Required</sup> <a name="LogSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.logSources"></a>

```go
func LogSources() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceLogSourcesList</a>

---

##### `MonitoringSources`<sup>Required</sup> <a name="MonitoringSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.monitoringSources"></a>

```go
func MonitoringSources() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceMonitoringSourcesList</a>

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource">DataOciSchServiceConnectorsServiceConnectorCollectionItemsSource</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValue</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.dimensionValue">DimensionValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DimensionValue`<sup>Required</sup> <a name="DimensionValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.dimensionValue"></a>

```go
func DimensionValue() DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsDimensionValueList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensions</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchRolloverSizeInMbs">BatchRolloverSizeInMbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchRolloverTimeInMs">BatchRolloverTimeInMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchSizeInKbs">BatchSizeInKbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchSizeInNum">BatchSizeInNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchTimeInSec">BatchTimeInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.enableFormattedMessaging">EnableFormattedMessaging</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.logSourceIdentifier">LogSourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.metric">Metric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.metricNamespace">MetricNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.objectNamePrefix">ObjectNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.topicId">TopicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchRolloverSizeInMbs`<sup>Required</sup> <a name="BatchRolloverSizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchRolloverSizeInMbs"></a>

```go
func BatchRolloverSizeInMbs() *f64
```

- *Type:* *f64

---

##### `BatchRolloverTimeInMs`<sup>Required</sup> <a name="BatchRolloverTimeInMs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchRolloverTimeInMs"></a>

```go
func BatchRolloverTimeInMs() *f64
```

- *Type:* *f64

---

##### `BatchSizeInKbs`<sup>Required</sup> <a name="BatchSizeInKbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchSizeInKbs"></a>

```go
func BatchSizeInKbs() *f64
```

- *Type:* *f64

---

##### `BatchSizeInNum`<sup>Required</sup> <a name="BatchSizeInNum" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchSizeInNum"></a>

```go
func BatchSizeInNum() *f64
```

- *Type:* *f64

---

##### `BatchTimeInSec`<sup>Required</sup> <a name="BatchTimeInSec" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.batchTimeInSec"></a>

```go
func BatchTimeInSec() *f64
```

- *Type:* *f64

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.dimensions"></a>

```go
func Dimensions() DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetDimensionsList</a>

---

##### `EnableFormattedMessaging`<sup>Required</sup> <a name="EnableFormattedMessaging" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.enableFormattedMessaging"></a>

```go
func EnableFormattedMessaging() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogSourceIdentifier`<sup>Required</sup> <a name="LogSourceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.logSourceIdentifier"></a>

```go
func LogSourceIdentifier() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.metric"></a>

```go
func Metric() *string
```

- *Type:* *string

---

##### `MetricNamespace`<sup>Required</sup> <a name="MetricNamespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.metricNamespace"></a>

```go
func MetricNamespace() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ObjectNamePrefix`<sup>Required</sup> <a name="ObjectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.objectNamePrefix"></a>

```go
func ObjectNamePrefix() *string
```

- *Type:* *string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.topicId"></a>

```go
func TopicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTarget</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.batchSizeInKbs">BatchSizeInKbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.batchTimeInSec">BatchTimeInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchSizeInKbs`<sup>Required</sup> <a name="BatchSizeInKbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.batchSizeInKbs"></a>

```go
func BatchSizeInKbs() *f64
```

- *Type:* *f64

---

##### `BatchTimeInSec`<sup>Required</sup> <a name="BatchTimeInSec" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.batchTimeInSec"></a>

```go
func BatchTimeInSec() *f64
```

- *Type:* *f64

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks">DataOciSchServiceConnectorsServiceConnectorCollectionItemsTasks</a>

---


### DataOciSchServiceConnectorsServiceConnectorCollectionList <a name="DataOciSchServiceConnectorsServiceConnectorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.get"></a>

```go
func Get(index *f64) DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference <a name="DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocischserviceconnectors"

dataocischserviceconnectors.NewDataOciSchServiceConnectorsServiceConnectorCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection">DataOciSchServiceConnectorsServiceConnectorCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.items"></a>

```go
func Items() DataOciSchServiceConnectorsServiceConnectorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionItemsList">DataOciSchServiceConnectorsServiceConnectorCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciSchServiceConnectorsServiceConnectorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnectors.DataOciSchServiceConnectorsServiceConnectorCollection">DataOciSchServiceConnectorsServiceConnectorCollection</a>

---



