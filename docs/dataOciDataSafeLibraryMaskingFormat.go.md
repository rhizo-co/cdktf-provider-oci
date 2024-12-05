# `dataOciDataSafeLibraryMaskingFormat` Submodule <a name="`dataOciDataSafeLibraryMaskingFormat` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeLibraryMaskingFormat <a name="DataOciDataSafeLibraryMaskingFormat" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format oci_data_safe_library_masking_format}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformat"

dataocidatasafelibrarymaskingformat.NewDataOciDataSafeLibraryMaskingFormat(scope Construct, id *string, config DataOciDataSafeLibraryMaskingFormatConfig) DataOciDataSafeLibraryMaskingFormat
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig">DataOciDataSafeLibraryMaskingFormatConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig">DataOciDataSafeLibraryMaskingFormatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformat"

dataocidatasafelibrarymaskingformat.DataOciDataSafeLibraryMaskingFormat_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformat"

dataocidatasafelibrarymaskingformat.DataOciDataSafeLibraryMaskingFormat_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformat"

dataocidatasafelibrarymaskingformat.DataOciDataSafeLibraryMaskingFormat_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformat"

dataocidatasafelibrarymaskingformat.DataOciDataSafeLibraryMaskingFormat_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeLibraryMaskingFormat to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeLibraryMaskingFormat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeLibraryMaskingFormat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.formatEntries">FormatEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList">DataOciDataSafeLibraryMaskingFormatFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.sensitiveTypeIds">SensitiveTypeIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatIdInput">LibraryMaskingFormatIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FormatEntries`<sup>Required</sup> <a name="FormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.formatEntries"></a>

```go
func FormatEntries() DataOciDataSafeLibraryMaskingFormatFormatEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList">DataOciDataSafeLibraryMaskingFormatFormatEntriesList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SensitiveTypeIds`<sup>Required</sup> <a name="SensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.sensitiveTypeIds"></a>

```go
func SensitiveTypeIds() *[]*string
```

- *Type:* *[]*string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `LibraryMaskingFormatIdInput`<sup>Optional</sup> <a name="LibraryMaskingFormatIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatIdInput"></a>

```go
func LibraryMaskingFormatIdInput() *string
```

- *Type:* *string

---

##### `LibraryMaskingFormatId`<sup>Required</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.libraryMaskingFormatId"></a>

```go
func LibraryMaskingFormatId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormat.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeLibraryMaskingFormatConfig <a name="DataOciDataSafeLibraryMaskingFormatConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformat"

&dataocidatasafelibrarymaskingformat.DataOciDataSafeLibraryMaskingFormatConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LibraryMaskingFormatId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#library_masking_format_id DataOciDataSafeLibraryMaskingFormat#library_masking_format_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LibraryMaskingFormatId`<sup>Required</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatConfig.property.libraryMaskingFormatId"></a>

```go
LibraryMaskingFormatId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_format#library_masking_format_id DataOciDataSafeLibraryMaskingFormat#library_masking_format_id}.

---

### DataOciDataSafeLibraryMaskingFormatFormatEntries <a name="DataOciDataSafeLibraryMaskingFormatFormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformat"

&dataocidatasafelibrarymaskingformat.DataOciDataSafeLibraryMaskingFormatFormatEntries {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeLibraryMaskingFormatFormatEntriesList <a name="DataOciDataSafeLibraryMaskingFormatFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformat"

dataocidatasafelibrarymaskingformat.NewDataOciDataSafeLibraryMaskingFormatFormatEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeLibraryMaskingFormatFormatEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.get"></a>

```go
func Get(index *f64) DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference <a name="DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformat"

dataocidatasafelibrarymaskingformat.NewDataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength">EndLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue">EndValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber">FixedNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString">FixedString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns">GroupingColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction">PostProcessingFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList">RandomList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression">RegularExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith">ReplaceWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength">StartLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition">StartPosition</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue">StartValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction">UserDefinedFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries">DataOciDataSafeLibraryMaskingFormatFormatEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `EndLength`<sup>Required</sup> <a name="EndLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength"></a>

```go
func EndLength() *f64
```

- *Type:* *f64

---

##### `EndValue`<sup>Required</sup> <a name="EndValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue"></a>

```go
func EndValue() *f64
```

- *Type:* *f64

---

##### `FixedNumber`<sup>Required</sup> <a name="FixedNumber" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber"></a>

```go
func FixedNumber() *f64
```

- *Type:* *f64

---

##### `FixedString`<sup>Required</sup> <a name="FixedString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString"></a>

```go
func FixedString() *string
```

- *Type:* *string

---

##### `GroupingColumns`<sup>Required</sup> <a name="GroupingColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns"></a>

```go
func GroupingColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `LibraryMaskingFormatId`<sup>Required</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```go
func LibraryMaskingFormatId() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `PostProcessingFunction`<sup>Required</sup> <a name="PostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction"></a>

```go
func PostProcessingFunction() *string
```

- *Type:* *string

---

##### `RandomList`<sup>Required</sup> <a name="RandomList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList"></a>

```go
func RandomList() *[]*string
```

- *Type:* *[]*string

---

##### `RegularExpression`<sup>Required</sup> <a name="RegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression"></a>

```go
func RegularExpression() *string
```

- *Type:* *string

---

##### `ReplaceWith`<sup>Required</sup> <a name="ReplaceWith" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith"></a>

```go
func ReplaceWith() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `StartLength`<sup>Required</sup> <a name="StartLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength"></a>

```go
func StartLength() *f64
```

- *Type:* *f64

---

##### `StartPosition`<sup>Required</sup> <a name="StartPosition" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition"></a>

```go
func StartPosition() *f64
```

- *Type:* *f64

---

##### `StartValue`<sup>Required</sup> <a name="StartValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue"></a>

```go
func StartValue() *f64
```

- *Type:* *f64

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserDefinedFunction`<sup>Required</sup> <a name="UserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction"></a>

```go
func UserDefinedFunction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeLibraryMaskingFormatFormatEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormat.DataOciDataSafeLibraryMaskingFormatFormatEntries">DataOciDataSafeLibraryMaskingFormatFormatEntries</a>

---



