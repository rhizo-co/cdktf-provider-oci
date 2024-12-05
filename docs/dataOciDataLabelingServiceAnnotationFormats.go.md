# `dataOciDataLabelingServiceAnnotationFormats` Submodule <a name="`dataOciDataLabelingServiceAnnotationFormats` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataLabelingServiceAnnotationFormats <a name="DataOciDataLabelingServiceAnnotationFormats" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats oci_data_labeling_service_annotation_formats}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

dataocidatalabelingserviceannotationformats.NewDataOciDataLabelingServiceAnnotationFormats(scope Construct, id *string, config DataOciDataLabelingServiceAnnotationFormatsConfig) DataOciDataLabelingServiceAnnotationFormats
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig">DataOciDataLabelingServiceAnnotationFormatsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig">DataOciDataLabelingServiceAnnotationFormatsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataLabelingServiceAnnotationFormats resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

dataocidatalabelingserviceannotationformats.DataOciDataLabelingServiceAnnotationFormats_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

dataocidatalabelingserviceannotationformats.DataOciDataLabelingServiceAnnotationFormats_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

dataocidatalabelingserviceannotationformats.DataOciDataLabelingServiceAnnotationFormats_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

dataocidatalabelingserviceannotationformats.DataOciDataLabelingServiceAnnotationFormats_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataLabelingServiceAnnotationFormats resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataLabelingServiceAnnotationFormats to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataLabelingServiceAnnotationFormats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataLabelingServiceAnnotationFormats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.annotationFormatCollection">AnnotationFormatCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList">DataOciDataLabelingServiceAnnotationFormatsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AnnotationFormatCollection`<sup>Required</sup> <a name="AnnotationFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.annotationFormatCollection"></a>

```go
func AnnotationFormatCollection() DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filter"></a>

```go
func Filter() DataOciDataLabelingServiceAnnotationFormatsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList">DataOciDataLabelingServiceAnnotationFormatsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

&dataocidatalabelingserviceannotationformats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection {

}
```


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

&dataocidatalabelingserviceannotationformats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems {

}
```


### DataOciDataLabelingServiceAnnotationFormatsConfig <a name="DataOciDataLabelingServiceAnnotationFormatsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

&dataocidatalabelingserviceannotationformats.DataOciDataLabelingServiceAnnotationFormatsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#compartment_id DataOciDataLabelingServiceAnnotationFormats#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#id DataOciDataLabelingServiceAnnotationFormats#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#compartment_id DataOciDataLabelingServiceAnnotationFormats#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#filter DataOciDataLabelingServiceAnnotationFormats#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#id DataOciDataLabelingServiceAnnotationFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataLabelingServiceAnnotationFormatsFilter <a name="DataOciDataLabelingServiceAnnotationFormatsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

&dataocidatalabelingserviceannotationformats.DataOciDataLabelingServiceAnnotationFormatsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#name DataOciDataLabelingServiceAnnotationFormats#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#values DataOciDataLabelingServiceAnnotationFormats#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#regex DataOciDataLabelingServiceAnnotationFormats#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#name DataOciDataLabelingServiceAnnotationFormats#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#values DataOciDataLabelingServiceAnnotationFormats#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#regex DataOciDataLabelingServiceAnnotationFormats#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

dataocidatalabelingserviceannotationformats.NewDataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

dataocidatalabelingserviceannotationformats.NewDataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems</a>

---


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

dataocidatalabelingserviceannotationformats.NewDataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

dataocidatalabelingserviceannotationformats.NewDataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection</a>

---


### DataOciDataLabelingServiceAnnotationFormatsFilterList <a name="DataOciDataLabelingServiceAnnotationFormatsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

dataocidatalabelingserviceannotationformats.NewDataOciDataLabelingServiceAnnotationFormatsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataLabelingServiceAnnotationFormatsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference <a name="DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatalabelingserviceannotationformats"

dataocidatalabelingserviceannotationformats.NewDataOciDataLabelingServiceAnnotationFormatsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



