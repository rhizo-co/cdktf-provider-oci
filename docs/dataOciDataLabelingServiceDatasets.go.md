# `dataOciDataLabelingServiceDatasets` Submodule <a name="`dataOciDataLabelingServiceDatasets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataLabelingServiceDatasets <a name="DataOciDataLabelingServiceDatasets" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets oci_data_labeling_service_datasets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasets(scope Construct, id *string, config DataOciDataLabelingServiceDatasetsConfig) DataOciDataLabelingServiceDatasets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig">DataOciDataLabelingServiceDatasetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig">DataOciDataLabelingServiceDatasetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetAnnotationFormat">ResetAnnotationFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnnotationFormat` <a name="ResetAnnotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetAnnotationFormat"></a>

```go
func ResetAnnotationFormat()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataLabelingServiceDatasets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasets_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataLabelingServiceDatasets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataLabelingServiceDatasets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataLabelingServiceDatasets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataLabelingServiceDatasets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.datasetCollection">DatasetCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList">DataOciDataLabelingServiceDatasetsDatasetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList">DataOciDataLabelingServiceDatasetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormatInput">AnnotationFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormat">AnnotationFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DatasetCollection`<sup>Required</sup> <a name="DatasetCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.datasetCollection"></a>

```go
func DatasetCollection() DataOciDataLabelingServiceDatasetsDatasetCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList">DataOciDataLabelingServiceDatasetsDatasetCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filter"></a>

```go
func Filter() DataOciDataLabelingServiceDatasetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList">DataOciDataLabelingServiceDatasetsFilterList</a>

---

##### `AnnotationFormatInput`<sup>Optional</sup> <a name="AnnotationFormatInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormatInput"></a>

```go
func AnnotationFormatInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `AnnotationFormat`<sup>Required</sup> <a name="AnnotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.annotationFormat"></a>

```go
func AnnotationFormat() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataLabelingServiceDatasetsConfig <a name="DataOciDataLabelingServiceDatasetsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

&dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasetsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AnnotationFormat: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#compartment_id DataOciDataLabelingServiceDatasets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.annotationFormat">AnnotationFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#annotation_format DataOciDataLabelingServiceDatasets#annotation_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#display_name DataOciDataLabelingServiceDatasets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#id DataOciDataLabelingServiceDatasets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#state DataOciDataLabelingServiceDatasets#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#compartment_id DataOciDataLabelingServiceDatasets#compartment_id}.

---

##### `AnnotationFormat`<sup>Optional</sup> <a name="AnnotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.annotationFormat"></a>

```go
AnnotationFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#annotation_format DataOciDataLabelingServiceDatasets#annotation_format}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#display_name DataOciDataLabelingServiceDatasets#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#filter DataOciDataLabelingServiceDatasets#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#id DataOciDataLabelingServiceDatasets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#state DataOciDataLabelingServiceDatasets#state}.

---

### DataOciDataLabelingServiceDatasetsDatasetCollection <a name="DataOciDataLabelingServiceDatasetsDatasetCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

&dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasetsDatasetCollection {

}
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItems <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

&dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems {

}
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

&dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails {

}
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

&dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata {

}
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

&dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails {

}
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

&dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration {

}
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

&dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat {

}
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

&dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath {

}
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

&dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration {

}
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

&dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet {

}
```


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

&dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems {

}
```


### DataOciDataLabelingServiceDatasetsFilter <a name="DataOciDataLabelingServiceDatasetsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

&dataocidatalabelingservicedatasets.DataOciDataLabelingServiceDatasetsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#name DataOciDataLabelingServiceDatasets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#values DataOciDataLabelingServiceDatasets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#regex DataOciDataLabelingServiceDatasets#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#name DataOciDataLabelingServiceDatasets#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#values DataOciDataLabelingServiceDatasets#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_datasets#regex DataOciDataLabelingServiceDatasets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.formatType">FormatType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.textFileTypeMetadata">TextFileTypeMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FormatType`<sup>Required</sup> <a name="FormatType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.formatType"></a>

```go
func FormatType() *string
```

- *Type:* *string

---

##### `TextFileTypeMetadata`<sup>Required</sup> <a name="TextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.textFileTypeMetadata"></a>

```go
func TextFileTypeMetadata() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetails</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter">ColumnDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex">ColumnIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter">EscapeCharacter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType">FormatType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter">LineDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnDelimiter`<sup>Required</sup> <a name="ColumnDelimiter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter"></a>

```go
func ColumnDelimiter() *string
```

- *Type:* *string

---

##### `ColumnIndex`<sup>Required</sup> <a name="ColumnIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex"></a>

```go
func ColumnIndex() *f64
```

- *Type:* *f64

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `EscapeCharacter`<sup>Required</sup> <a name="EscapeCharacter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter"></a>

```go
func EscapeCharacter() *string
```

- *Type:* *string

---

##### `FormatType`<sup>Required</sup> <a name="FormatType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType"></a>

```go
func FormatType() *string
```

- *Type:* *string

---

##### `LineDelimiter`<sup>Required</sup> <a name="LineDelimiter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter"></a>

```go
func LineDelimiter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsTextFileTypeMetadata</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetails</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormat</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPath</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importFormat">ImportFormat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importMetadataPath">ImportMetadataPath</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImportFormat`<sup>Required</sup> <a name="ImportFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importFormat"></a>

```go
func ImportFormat() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportFormatList</a>

---

##### `ImportMetadataPath`<sup>Required</sup> <a name="ImportMetadataPath" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.importMetadataPath"></a>

```go
func ImportMetadataPath() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationImportMetadataPathList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfiguration</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfiguration</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItems</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.items"></a>

```go
func Items() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSet</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.annotationFormat">AnnotationFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetFormatDetails">DatasetFormatDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetSourceDetails">DatasetSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialImportDatasetConfiguration">InitialImportDatasetConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialRecordGenerationConfiguration">InitialRecordGenerationConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelingInstructions">LabelingInstructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelSet">LabelSet</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleSubstate">LifecycleSubstate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.additionalProperties"></a>

```go
func AdditionalProperties() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AnnotationFormat`<sup>Required</sup> <a name="AnnotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.annotationFormat"></a>

```go
func AnnotationFormat() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatasetFormatDetails`<sup>Required</sup> <a name="DatasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetFormatDetails"></a>

```go
func DatasetFormatDetails() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetFormatDetailsList</a>

---

##### `DatasetSourceDetails`<sup>Required</sup> <a name="DatasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.datasetSourceDetails"></a>

```go
func DatasetSourceDetails() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsDatasetSourceDetailsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialImportDatasetConfiguration`<sup>Required</sup> <a name="InitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialImportDatasetConfiguration"></a>

```go
func InitialImportDatasetConfiguration() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialImportDatasetConfigurationList</a>

---

##### `InitialRecordGenerationConfiguration`<sup>Required</sup> <a name="InitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.initialRecordGenerationConfiguration"></a>

```go
func InitialRecordGenerationConfiguration() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsInitialRecordGenerationConfigurationList</a>

---

##### `LabelingInstructions`<sup>Required</sup> <a name="LabelingInstructions" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelingInstructions"></a>

```go
func LabelingInstructions() *string
```

- *Type:* *string

---

##### `LabelSet`<sup>Required</sup> <a name="LabelSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.labelSet"></a>

```go
func LabelSet() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsLabelSetList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LifecycleSubstate`<sup>Required</sup> <a name="LifecycleSubstate" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.lifecycleSubstate"></a>

```go
func LifecycleSubstate() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataLabelingServiceDatasetsDatasetCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItems">DataOciDataLabelingServiceDatasetsDatasetCollectionItems</a>

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionList <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference <a name="DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection">DataOciDataLabelingServiceDatasetsDatasetCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList">DataOciDataLabelingServiceDatasetsDatasetCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataLabelingServiceDatasetsDatasetCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsDatasetCollection">DataOciDataLabelingServiceDatasetsDatasetCollection</a>

---


### DataOciDataLabelingServiceDatasetsFilterList <a name="DataOciDataLabelingServiceDatasetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceDatasetsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceDatasetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataLabelingServiceDatasetsFilterOutputReference <a name="DataOciDataLabelingServiceDatasetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingservicedatasets"

dataocidatalabelingservicedatasets.NewDataOciDataLabelingServiceDatasetsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceDatasetsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceDatasets.DataOciDataLabelingServiceDatasetsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



