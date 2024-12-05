# `dataOciJmsJavaDownloadsJavaDownloadRecords` Submodule <a name="`dataOciJmsJavaDownloadsJavaDownloadRecords` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaDownloadsJavaDownloadRecords <a name="DataOciJmsJavaDownloadsJavaDownloadRecords" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records oci_jms_java_downloads_java_download_records}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

dataocijmsjavadownloadsjavadownloadrecords.NewDataOciJmsJavaDownloadsJavaDownloadRecords(scope Construct, id *string, config DataOciJmsJavaDownloadsJavaDownloadRecordsConfig) DataOciJmsJavaDownloadsJavaDownloadRecords
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig">DataOciJmsJavaDownloadsJavaDownloadRecordsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig">DataOciJmsJavaDownloadsJavaDownloadRecordsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetArchitecture">ResetArchitecture</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetFamilyVersion">ResetFamilyVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetOsFamily">ResetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetPackageTypeDetail">ResetPackageTypeDetail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetReleaseVersion">ResetReleaseVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetTimeEnd">ResetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetTimeStart">ResetTimeStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArchitecture` <a name="ResetArchitecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetArchitecture"></a>

```go
func ResetArchitecture()
```

##### `ResetFamilyVersion` <a name="ResetFamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetFamilyVersion"></a>

```go
func ResetFamilyVersion()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetId"></a>

```go
func ResetId()
```

##### `ResetOsFamily` <a name="ResetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetOsFamily"></a>

```go
func ResetOsFamily()
```

##### `ResetPackageTypeDetail` <a name="ResetPackageTypeDetail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetPackageTypeDetail"></a>

```go
func ResetPackageTypeDetail()
```

##### `ResetReleaseVersion` <a name="ResetReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetReleaseVersion"></a>

```go
func ResetReleaseVersion()
```

##### `ResetTimeEnd` <a name="ResetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetTimeEnd"></a>

```go
func ResetTimeEnd()
```

##### `ResetTimeStart` <a name="ResetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.resetTimeStart"></a>

```go
func ResetTimeStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaDownloadRecords resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

dataocijmsjavadownloadsjavadownloadrecords.DataOciJmsJavaDownloadsJavaDownloadRecords_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

dataocijmsjavadownloadsjavadownloadrecords.DataOciJmsJavaDownloadsJavaDownloadRecords_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

dataocijmsjavadownloadsjavadownloadrecords.DataOciJmsJavaDownloadsJavaDownloadRecords_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

dataocijmsjavadownloadsjavadownloadrecords.DataOciJmsJavaDownloadsJavaDownloadRecords_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaDownloadRecords resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciJmsJavaDownloadsJavaDownloadRecords to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciJmsJavaDownloadsJavaDownloadRecords that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaDownloadsJavaDownloadRecords to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList">DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.javaDownloadRecordCollection">JavaDownloadRecordCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.architectureInput">ArchitectureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.familyVersionInput">FamilyVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.osFamilyInput">OsFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.packageTypeDetailInput">PackageTypeDetailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.releaseVersionInput">ReleaseVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeEndInput">TimeEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeStartInput">TimeStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.familyVersion">FamilyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.packageTypeDetail">PackageTypeDetail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.releaseVersion">ReleaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.filter"></a>

```go
func Filter() DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList">DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList</a>

---

##### `JavaDownloadRecordCollection`<sup>Required</sup> <a name="JavaDownloadRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.javaDownloadRecordCollection"></a>

```go
func JavaDownloadRecordCollection() DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList</a>

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.architectureInput"></a>

```go
func ArchitectureInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FamilyVersionInput`<sup>Optional</sup> <a name="FamilyVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.familyVersionInput"></a>

```go
func FamilyVersionInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.osFamilyInput"></a>

```go
func OsFamilyInput() *string
```

- *Type:* *string

---

##### `PackageTypeDetailInput`<sup>Optional</sup> <a name="PackageTypeDetailInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.packageTypeDetailInput"></a>

```go
func PackageTypeDetailInput() *string
```

- *Type:* *string

---

##### `ReleaseVersionInput`<sup>Optional</sup> <a name="ReleaseVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.releaseVersionInput"></a>

```go
func ReleaseVersionInput() *string
```

- *Type:* *string

---

##### `TimeEndInput`<sup>Optional</sup> <a name="TimeEndInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeEndInput"></a>

```go
func TimeEndInput() *string
```

- *Type:* *string

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeStartInput"></a>

```go
func TimeStartInput() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `FamilyVersion`<sup>Required</sup> <a name="FamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.familyVersion"></a>

```go
func FamilyVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `PackageTypeDetail`<sup>Required</sup> <a name="PackageTypeDetail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.packageTypeDetail"></a>

```go
func PackageTypeDetail() *string
```

- *Type:* *string

---

##### `ReleaseVersion`<sup>Required</sup> <a name="ReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.releaseVersion"></a>

```go
func ReleaseVersion() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecords.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaDownloadsJavaDownloadRecordsConfig <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

&dataocijmsjavadownloadsjavadownloadrecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Architecture: *string,
	FamilyVersion: *string,
	Filter: interface{},
	Id: *string,
	OsFamily: *string,
	PackageTypeDetail: *string,
	ReleaseVersion: *string,
	TimeEnd: *string,
	TimeStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#compartment_id DataOciJmsJavaDownloadsJavaDownloadRecords#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.architecture">Architecture</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#architecture DataOciJmsJavaDownloadsJavaDownloadRecords#architecture}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.familyVersion">FamilyVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#family_version DataOciJmsJavaDownloadsJavaDownloadRecords#family_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#id DataOciJmsJavaDownloadsJavaDownloadRecords#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.osFamily">OsFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#os_family DataOciJmsJavaDownloadsJavaDownloadRecords#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.packageTypeDetail">PackageTypeDetail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#package_type_detail DataOciJmsJavaDownloadsJavaDownloadRecords#package_type_detail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.releaseVersion">ReleaseVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#release_version DataOciJmsJavaDownloadsJavaDownloadRecords#release_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#time_end DataOciJmsJavaDownloadsJavaDownloadRecords#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.timeStart">TimeStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#time_start DataOciJmsJavaDownloadsJavaDownloadRecords#time_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#compartment_id DataOciJmsJavaDownloadsJavaDownloadRecords#compartment_id}.

---

##### `Architecture`<sup>Optional</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.architecture"></a>

```go
Architecture *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#architecture DataOciJmsJavaDownloadsJavaDownloadRecords#architecture}.

---

##### `FamilyVersion`<sup>Optional</sup> <a name="FamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.familyVersion"></a>

```go
FamilyVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#family_version DataOciJmsJavaDownloadsJavaDownloadRecords#family_version}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#filter DataOciJmsJavaDownloadsJavaDownloadRecords#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#id DataOciJmsJavaDownloadsJavaDownloadRecords#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OsFamily`<sup>Optional</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.osFamily"></a>

```go
OsFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#os_family DataOciJmsJavaDownloadsJavaDownloadRecords#os_family}.

---

##### `PackageTypeDetail`<sup>Optional</sup> <a name="PackageTypeDetail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.packageTypeDetail"></a>

```go
PackageTypeDetail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#package_type_detail DataOciJmsJavaDownloadsJavaDownloadRecords#package_type_detail}.

---

##### `ReleaseVersion`<sup>Optional</sup> <a name="ReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.releaseVersion"></a>

```go
ReleaseVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#release_version DataOciJmsJavaDownloadsJavaDownloadRecords#release_version}.

---

##### `TimeEnd`<sup>Optional</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.timeEnd"></a>

```go
TimeEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#time_end DataOciJmsJavaDownloadsJavaDownloadRecords#time_end}.

---

##### `TimeStart`<sup>Optional</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsConfig.property.timeStart"></a>

```go
TimeStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#time_start DataOciJmsJavaDownloadsJavaDownloadRecords#time_start}.

---

### DataOciJmsJavaDownloadsJavaDownloadRecordsFilter <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

&dataocijmsjavadownloadsjavadownloadrecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#name DataOciJmsJavaDownloadsJavaDownloadRecords#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#values DataOciJmsJavaDownloadsJavaDownloadRecords#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#regex DataOciJmsJavaDownloadsJavaDownloadRecords#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#name DataOciJmsJavaDownloadsJavaDownloadRecords#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#values DataOciJmsJavaDownloadsJavaDownloadRecords#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_records#regex DataOciJmsJavaDownloadsJavaDownloadRecords#regex}.

---

### DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

&dataocijmsjavadownloadsjavadownloadrecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection {

}
```


### DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

&dataocijmsjavadownloadsjavadownloadrecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

dataocijmsjavadownloadsjavadownloadrecords.NewDataOciJmsJavaDownloadsJavaDownloadRecordsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

dataocijmsjavadownloadsjavadownloadrecords.NewDataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

dataocijmsjavadownloadsjavadownloadrecords.NewDataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

dataocijmsjavadownloadsjavadownloadrecords.NewDataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.downloadSourceId">DownloadSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.downloadType">DownloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.familyDisplayName">FamilyDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.familyVersion">FamilyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.osFamily">OsFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.packageTypeDetail">PackageTypeDetail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.releaseVersion">ReleaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.timeDownloaded">TimeDownloaded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `DownloadSourceId`<sup>Required</sup> <a name="DownloadSourceId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.downloadSourceId"></a>

```go
func DownloadSourceId() *string
```

- *Type:* *string

---

##### `DownloadType`<sup>Required</sup> <a name="DownloadType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.downloadType"></a>

```go
func DownloadType() *string
```

- *Type:* *string

---

##### `FamilyDisplayName`<sup>Required</sup> <a name="FamilyDisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.familyDisplayName"></a>

```go
func FamilyDisplayName() *string
```

- *Type:* *string

---

##### `FamilyVersion`<sup>Required</sup> <a name="FamilyVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.familyVersion"></a>

```go
func FamilyVersion() *string
```

- *Type:* *string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.osFamily"></a>

```go
func OsFamily() *string
```

- *Type:* *string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `PackageTypeDetail`<sup>Required</sup> <a name="PackageTypeDetail" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.packageTypeDetail"></a>

```go
func PackageTypeDetail() *string
```

- *Type:* *string

---

##### `ReleaseVersion`<sup>Required</sup> <a name="ReleaseVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.releaseVersion"></a>

```go
func ReleaseVersion() *string
```

- *Type:* *string

---

##### `TimeDownloaded`<sup>Required</sup> <a name="TimeDownloaded" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.timeDownloaded"></a>

```go
func TimeDownloaded() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItems</a>

---


### DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

dataocijmsjavadownloadsjavadownloadrecords.NewDataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavadownloadrecords"

dataocijmsjavadownloadsjavadownloadrecords.NewDataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.items"></a>

```go
func Items() DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadRecords.DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection">DataOciJmsJavaDownloadsJavaDownloadRecordsJavaDownloadRecordCollection</a>

---



