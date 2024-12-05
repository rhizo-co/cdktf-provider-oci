# `dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords` Submodule <a name="`dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records oci_jms_java_downloads_java_license_acceptance_records}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.NewDataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords(scope Construct, id *string, config DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetSearchByUser">ResetSearchByUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetId"></a>

```go
func ResetId()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetLicenseType"></a>

```go
func ResetLicenseType()
```

##### `ResetSearchByUser` <a name="ResetSearchByUser" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetSearchByUser"></a>

```go
func ResetSearchByUser()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.javaLicenseAcceptanceRecordCollection">JavaLicenseAcceptanceRecordCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.searchByUserInput">SearchByUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.searchByUser">SearchByUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.filter"></a>

```go
func Filter() DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList</a>

---

##### `JavaLicenseAcceptanceRecordCollection`<sup>Required</sup> <a name="JavaLicenseAcceptanceRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.javaLicenseAcceptanceRecordCollection"></a>

```go
func JavaLicenseAcceptanceRecordCollection() DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `SearchByUserInput`<sup>Optional</sup> <a name="SearchByUserInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.searchByUserInput"></a>

```go
func SearchByUserInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `SearchByUser`<sup>Required</sup> <a name="SearchByUser" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.searchByUser"></a>

```go
func SearchByUser() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

&dataocijmsjavadownloadsjavalicenseacceptancerecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig {
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
	LicenseType: *string,
	SearchByUser: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#compartment_id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.licenseType">LicenseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#license_type DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.searchByUser">SearchByUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#search_by_user DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#search_by_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#status DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#compartment_id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#filter DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#license_type DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#license_type}.

---

##### `SearchByUser`<sup>Optional</sup> <a name="SearchByUser" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.searchByUser"></a>

```go
SearchByUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#search_by_user DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#search_by_user}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#status DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#status}.

---

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

&dataocijmsjavadownloadsjavalicenseacceptancerecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#name DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#values DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#regex DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#name DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#values DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_license_acceptance_records#regex DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords#regex}.

---

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

&dataocijmsjavadownloadsjavalicenseacceptancerecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection {

}
```


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

&dataocijmsjavadownloadsjavalicenseacceptancerecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems {

}
```


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

&dataocijmsjavadownloadsjavalicenseacceptancerecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy {

}
```


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

&dataocijmsjavadownloadsjavalicenseacceptancerecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.NewDataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.NewDataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.NewDataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.NewDataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedBy</a>

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.NewDataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.NewDataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedBy</a>

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.NewDataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.NewDataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.createdBy">CreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.licenseAcceptanceStatus">LicenseAcceptanceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.timeAccepted">TimeAccepted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.timeLastUpdated">TimeLastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.createdBy"></a>

```go
func CreatedBy() DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsCreatedByList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```go
func LastUpdatedBy() DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsLastUpdatedByList</a>

---

##### `LicenseAcceptanceStatus`<sup>Required</sup> <a name="LicenseAcceptanceStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.licenseAcceptanceStatus"></a>

```go
func LicenseAcceptanceStatus() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.timeAccepted"></a>

```go
func TimeAccepted() *string
```

- *Type:* *string

---

##### `TimeLastUpdated`<sup>Required</sup> <a name="TimeLastUpdated" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.timeLastUpdated"></a>

```go
func TimeLastUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItems</a>

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.NewDataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.get"></a>

```go
func Get(index *f64) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference <a name="DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocijmsjavadownloadsjavalicenseacceptancerecords"

dataocijmsjavadownloadsjavalicenseacceptancerecords.NewDataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.items"></a>

```go
func Items() DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecords.DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection">DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordsJavaLicenseAcceptanceRecordCollection</a>

---



