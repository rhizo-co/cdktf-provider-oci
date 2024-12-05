# `dataOciDataSafeLibraryMaskingFormats` Submodule <a name="`dataOciDataSafeLibraryMaskingFormats` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeLibraryMaskingFormats <a name="DataOciDataSafeLibraryMaskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats oci_data_safe_library_masking_formats}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

dataocidatasafelibrarymaskingformats.NewDataOciDataSafeLibraryMaskingFormats(scope Construct, id *string, config DataOciDataSafeLibraryMaskingFormatsConfig) DataOciDataSafeLibraryMaskingFormats
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig">DataOciDataSafeLibraryMaskingFormatsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig">DataOciDataSafeLibraryMaskingFormatsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatId">ResetLibraryMaskingFormatId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatSource">ResetLibraryMaskingFormatSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedGreaterThanOrEqualTo">ResetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedLessThan">ResetTimeCreatedLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetId"></a>

```go
func ResetId()
```

##### `ResetLibraryMaskingFormatId` <a name="ResetLibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatId"></a>

```go
func ResetLibraryMaskingFormatId()
```

##### `ResetLibraryMaskingFormatSource` <a name="ResetLibraryMaskingFormatSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetLibraryMaskingFormatSource"></a>

```go
func ResetLibraryMaskingFormatSource()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeCreatedGreaterThanOrEqualTo` <a name="ResetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedGreaterThanOrEqualTo"></a>

```go
func ResetTimeCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeCreatedLessThan` <a name="ResetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.resetTimeCreatedLessThan"></a>

```go
func ResetTimeCreatedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormats resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

dataocidatasafelibrarymaskingformats.DataOciDataSafeLibraryMaskingFormats_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

dataocidatasafelibrarymaskingformats.DataOciDataSafeLibraryMaskingFormats_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

dataocidatasafelibrarymaskingformats.DataOciDataSafeLibraryMaskingFormats_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

dataocidatasafelibrarymaskingformats.DataOciDataSafeLibraryMaskingFormats_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeLibraryMaskingFormats resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeLibraryMaskingFormats to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeLibraryMaskingFormats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeLibraryMaskingFormats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList">DataOciDataSafeLibraryMaskingFormatsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatCollection">LibraryMaskingFormatCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatIdInput">LibraryMaskingFormatIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSourceInput">LibraryMaskingFormatSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualToInput">TimeCreatedGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThanInput">TimeCreatedLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSource">LibraryMaskingFormatSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filter"></a>

```go
func Filter() DataOciDataSafeLibraryMaskingFormatsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList">DataOciDataSafeLibraryMaskingFormatsFilterList</a>

---

##### `LibraryMaskingFormatCollection`<sup>Required</sup> <a name="LibraryMaskingFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatCollection"></a>

```go
func LibraryMaskingFormatCollection() DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LibraryMaskingFormatIdInput`<sup>Optional</sup> <a name="LibraryMaskingFormatIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatIdInput"></a>

```go
func LibraryMaskingFormatIdInput() *string
```

- *Type:* *string

---

##### `LibraryMaskingFormatSourceInput`<sup>Optional</sup> <a name="LibraryMaskingFormatSourceInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSourceInput"></a>

```go
func LibraryMaskingFormatSourceInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualToInput"></a>

```go
func TimeCreatedGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeCreatedLessThanInput`<sup>Optional</sup> <a name="TimeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThanInput"></a>

```go
func TimeCreatedLessThanInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LibraryMaskingFormatId`<sup>Required</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatId"></a>

```go
func LibraryMaskingFormatId() *string
```

- *Type:* *string

---

##### `LibraryMaskingFormatSource`<sup>Required</sup> <a name="LibraryMaskingFormatSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.libraryMaskingFormatSource"></a>

```go
func LibraryMaskingFormatSource() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedGreaterThanOrEqualTo"></a>

```go
func TimeCreatedGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeCreatedLessThan`<sup>Required</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.timeCreatedLessThan"></a>

```go
func TimeCreatedLessThan() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormats.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeLibraryMaskingFormatsConfig <a name="DataOciDataSafeLibraryMaskingFormatsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

&dataocidatasafelibrarymaskingformats.DataOciDataSafeLibraryMaskingFormatsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AccessLevel: *string,
	CompartmentIdInSubtree: interface{},
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	LibraryMaskingFormatId: *string,
	LibraryMaskingFormatSource: *string,
	State: *string,
	TimeCreatedGreaterThanOrEqualTo: *string,
	TimeCreatedLessThan: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id DataOciDataSafeLibraryMaskingFormats#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#access_level DataOciDataSafeLibraryMaskingFormats#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id_in_subtree DataOciDataSafeLibraryMaskingFormats#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#display_name DataOciDataSafeLibraryMaskingFormats#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#id DataOciDataSafeLibraryMaskingFormats#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_id DataOciDataSafeLibraryMaskingFormats#library_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatSource">LibraryMaskingFormatSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_source DataOciDataSafeLibraryMaskingFormats#library_masking_format_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#state DataOciDataSafeLibraryMaskingFormats#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_greater_than_or_equal_to DataOciDataSafeLibraryMaskingFormats#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_less_than DataOciDataSafeLibraryMaskingFormats#time_created_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id DataOciDataSafeLibraryMaskingFormats#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#access_level DataOciDataSafeLibraryMaskingFormats#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#compartment_id_in_subtree DataOciDataSafeLibraryMaskingFormats#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#display_name DataOciDataSafeLibraryMaskingFormats#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#filter DataOciDataSafeLibraryMaskingFormats#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#id DataOciDataSafeLibraryMaskingFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LibraryMaskingFormatId`<sup>Optional</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatId"></a>

```go
LibraryMaskingFormatId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_id DataOciDataSafeLibraryMaskingFormats#library_masking_format_id}.

---

##### `LibraryMaskingFormatSource`<sup>Optional</sup> <a name="LibraryMaskingFormatSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.libraryMaskingFormatSource"></a>

```go
LibraryMaskingFormatSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#library_masking_format_source DataOciDataSafeLibraryMaskingFormats#library_masking_format_source}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#state DataOciDataSafeLibraryMaskingFormats#state}.

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```go
TimeCreatedGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_greater_than_or_equal_to DataOciDataSafeLibraryMaskingFormats#time_created_greater_than_or_equal_to}.

---

##### `TimeCreatedLessThan`<sup>Optional</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsConfig.property.timeCreatedLessThan"></a>

```go
TimeCreatedLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#time_created_less_than DataOciDataSafeLibraryMaskingFormats#time_created_less_than}.

---

### DataOciDataSafeLibraryMaskingFormatsFilter <a name="DataOciDataSafeLibraryMaskingFormatsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

&dataocidatasafelibrarymaskingformats.DataOciDataSafeLibraryMaskingFormatsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#name DataOciDataSafeLibraryMaskingFormats#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#values DataOciDataSafeLibraryMaskingFormats#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#regex DataOciDataSafeLibraryMaskingFormats#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#name DataOciDataSafeLibraryMaskingFormats#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#values DataOciDataSafeLibraryMaskingFormats#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_library_masking_formats#regex DataOciDataSafeLibraryMaskingFormats#regex}.

---

### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

&dataocidatasafelibrarymaskingformats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection {

}
```


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

&dataocidatasafelibrarymaskingformats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems {

}
```


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

&dataocidatasafelibrarymaskingformats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeLibraryMaskingFormatsFilterList <a name="DataOciDataSafeLibraryMaskingFormatsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

dataocidatasafelibrarymaskingformats.NewDataOciDataSafeLibraryMaskingFormatsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeLibraryMaskingFormatsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeLibraryMaskingFormatsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeLibraryMaskingFormatsFilterOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

dataocidatasafelibrarymaskingformats.NewDataOciDataSafeLibraryMaskingFormatsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeLibraryMaskingFormatsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

dataocidatasafelibrarymaskingformats.NewDataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.get"></a>

```go
func Get(index *f64) DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

dataocidatasafelibrarymaskingformats.NewDataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endLength">EndLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endValue">EndValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedNumber">FixedNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedString">FixedString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.groupingColumns">GroupingColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.libraryMaskingFormatId">LibraryMaskingFormatId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.postProcessingFunction">PostProcessingFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.randomList">RandomList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.regularExpression">RegularExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.replaceWith">ReplaceWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startLength">StartLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startPosition">StartPosition</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startValue">StartValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.userDefinedFunction">UserDefinedFunction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `EndLength`<sup>Required</sup> <a name="EndLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endLength"></a>

```go
func EndLength() *f64
```

- *Type:* *f64

---

##### `EndValue`<sup>Required</sup> <a name="EndValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.endValue"></a>

```go
func EndValue() *f64
```

- *Type:* *f64

---

##### `FixedNumber`<sup>Required</sup> <a name="FixedNumber" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedNumber"></a>

```go
func FixedNumber() *f64
```

- *Type:* *f64

---

##### `FixedString`<sup>Required</sup> <a name="FixedString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.fixedString"></a>

```go
func FixedString() *string
```

- *Type:* *string

---

##### `GroupingColumns`<sup>Required</sup> <a name="GroupingColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.groupingColumns"></a>

```go
func GroupingColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `LibraryMaskingFormatId`<sup>Required</sup> <a name="LibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```go
func LibraryMaskingFormatId() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `PostProcessingFunction`<sup>Required</sup> <a name="PostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.postProcessingFunction"></a>

```go
func PostProcessingFunction() *string
```

- *Type:* *string

---

##### `RandomList`<sup>Required</sup> <a name="RandomList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.randomList"></a>

```go
func RandomList() *[]*string
```

- *Type:* *[]*string

---

##### `RegularExpression`<sup>Required</sup> <a name="RegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.regularExpression"></a>

```go
func RegularExpression() *string
```

- *Type:* *string

---

##### `ReplaceWith`<sup>Required</sup> <a name="ReplaceWith" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.replaceWith"></a>

```go
func ReplaceWith() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `StartLength`<sup>Required</sup> <a name="StartLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startLength"></a>

```go
func StartLength() *f64
```

- *Type:* *f64

---

##### `StartPosition`<sup>Required</sup> <a name="StartPosition" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startPosition"></a>

```go
func StartPosition() *f64
```

- *Type:* *f64

---

##### `StartValue`<sup>Required</sup> <a name="StartValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.startValue"></a>

```go
func StartValue() *f64
```

- *Type:* *f64

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserDefinedFunction`<sup>Required</sup> <a name="UserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.userDefinedFunction"></a>

```go
func UserDefinedFunction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntries</a>

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

dataocidatasafelibrarymaskingformats.NewDataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

dataocidatasafelibrarymaskingformats.NewDataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.formatEntries">FormatEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.sensitiveTypeIds">SensitiveTypeIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FormatEntries`<sup>Required</sup> <a name="FormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.formatEntries"></a>

```go
func FormatEntries() DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsFormatEntriesList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SensitiveTypeIds`<sup>Required</sup> <a name="SensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.sensitiveTypeIds"></a>

```go
func SensitiveTypeIds() *[]*string
```

- *Type:* *[]*string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItems</a>

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

dataocidatasafelibrarymaskingformats.NewDataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference <a name="DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafelibrarymaskingformats"

dataocidatasafelibrarymaskingformats.NewDataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeLibraryMaskingFormats.DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection">DataOciDataSafeLibraryMaskingFormatsLibraryMaskingFormatCollection</a>

---



