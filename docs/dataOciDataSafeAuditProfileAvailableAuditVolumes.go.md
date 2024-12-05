# `dataOciDataSafeAuditProfileAvailableAuditVolumes` Submodule <a name="`dataOciDataSafeAuditProfileAvailableAuditVolumes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolumes <a name="DataOciDataSafeAuditProfileAvailableAuditVolumes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes oci_data_safe_audit_profile_available_audit_volumes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

dataocidatasafeauditprofileavailableauditvolumes.NewDataOciDataSafeAuditProfileAvailableAuditVolumes(scope Construct, id *string, config DataOciDataSafeAuditProfileAvailableAuditVolumesConfig) DataOciDataSafeAuditProfileAvailableAuditVolumes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig">DataOciDataSafeAuditProfileAvailableAuditVolumesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig">DataOciDataSafeAuditProfileAvailableAuditVolumesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetMonthInConsiderationGreaterThan">ResetMonthInConsiderationGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetMonthInConsiderationLessThan">ResetMonthInConsiderationLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetTrailLocation">ResetTrailLocation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetId"></a>

```go
func ResetId()
```

##### `ResetMonthInConsiderationGreaterThan` <a name="ResetMonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetMonthInConsiderationGreaterThan"></a>

```go
func ResetMonthInConsiderationGreaterThan()
```

##### `ResetMonthInConsiderationLessThan` <a name="ResetMonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetMonthInConsiderationLessThan"></a>

```go
func ResetMonthInConsiderationLessThan()
```

##### `ResetTrailLocation` <a name="ResetTrailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.resetTrailLocation"></a>

```go
func ResetTrailLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeAuditProfileAvailableAuditVolumes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

dataocidatasafeauditprofileavailableauditvolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

dataocidatasafeauditprofileavailableauditvolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

dataocidatasafeauditprofileavailableauditvolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

dataocidatasafeauditprofileavailableauditvolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeAuditProfileAvailableAuditVolumes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeAuditProfileAvailableAuditVolumes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeAuditProfileAvailableAuditVolumes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeAuditProfileAvailableAuditVolumes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.availableAuditVolumeCollection">AvailableAuditVolumeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList">DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.auditProfileIdInput">AuditProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationGreaterThanInput">MonthInConsiderationGreaterThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationLessThanInput">MonthInConsiderationLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.trailLocationInput">TrailLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.workRequestIdInput">WorkRequestIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.auditProfileId">AuditProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationGreaterThan">MonthInConsiderationGreaterThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationLessThan">MonthInConsiderationLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.trailLocation">TrailLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.workRequestId">WorkRequestId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AvailableAuditVolumeCollection`<sup>Required</sup> <a name="AvailableAuditVolumeCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.availableAuditVolumeCollection"></a>

```go
func AvailableAuditVolumeCollection() DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.filter"></a>

```go
func Filter() DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList">DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList</a>

---

##### `AuditProfileIdInput`<sup>Optional</sup> <a name="AuditProfileIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.auditProfileIdInput"></a>

```go
func AuditProfileIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MonthInConsiderationGreaterThanInput`<sup>Optional</sup> <a name="MonthInConsiderationGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationGreaterThanInput"></a>

```go
func MonthInConsiderationGreaterThanInput() *string
```

- *Type:* *string

---

##### `MonthInConsiderationLessThanInput`<sup>Optional</sup> <a name="MonthInConsiderationLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationLessThanInput"></a>

```go
func MonthInConsiderationLessThanInput() *string
```

- *Type:* *string

---

##### `TrailLocationInput`<sup>Optional</sup> <a name="TrailLocationInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.trailLocationInput"></a>

```go
func TrailLocationInput() *string
```

- *Type:* *string

---

##### `WorkRequestIdInput`<sup>Optional</sup> <a name="WorkRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.workRequestIdInput"></a>

```go
func WorkRequestIdInput() *string
```

- *Type:* *string

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.auditProfileId"></a>

```go
func AuditProfileId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MonthInConsiderationGreaterThan`<sup>Required</sup> <a name="MonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationGreaterThan"></a>

```go
func MonthInConsiderationGreaterThan() *string
```

- *Type:* *string

---

##### `MonthInConsiderationLessThan`<sup>Required</sup> <a name="MonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.monthInConsiderationLessThan"></a>

```go
func MonthInConsiderationLessThan() *string
```

- *Type:* *string

---

##### `TrailLocation`<sup>Required</sup> <a name="TrailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.trailLocation"></a>

```go
func TrailLocation() *string
```

- *Type:* *string

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.workRequestId"></a>

```go
func WorkRequestId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

&dataocidatasafeauditprofileavailableauditvolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection {

}
```


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

&dataocidatasafeauditprofileavailableauditvolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems {

}
```


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

&dataocidatasafeauditprofileavailableauditvolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems {

}
```


### DataOciDataSafeAuditProfileAvailableAuditVolumesConfig <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

&dataocidatasafeauditprofileavailableauditvolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuditProfileId: *string,
	WorkRequestId: *string,
	Filter: interface{},
	Id: *string,
	MonthInConsiderationGreaterThan: *string,
	MonthInConsiderationLessThan: *string,
	TrailLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.auditProfileId">AuditProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolumes#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.workRequestId">WorkRequestId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolumes#work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#id DataOciDataSafeAuditProfileAvailableAuditVolumes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.monthInConsiderationGreaterThan">MonthInConsiderationGreaterThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.monthInConsiderationLessThan">MonthInConsiderationLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.trailLocation">TrailLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#trail_location DataOciDataSafeAuditProfileAvailableAuditVolumes#trail_location}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.auditProfileId"></a>

```go
AuditProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#audit_profile_id DataOciDataSafeAuditProfileAvailableAuditVolumes#audit_profile_id}.

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.workRequestId"></a>

```go
WorkRequestId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#work_request_id DataOciDataSafeAuditProfileAvailableAuditVolumes#work_request_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#filter DataOciDataSafeAuditProfileAvailableAuditVolumes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#id DataOciDataSafeAuditProfileAvailableAuditVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonthInConsiderationGreaterThan`<sup>Optional</sup> <a name="MonthInConsiderationGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.monthInConsiderationGreaterThan"></a>

```go
MonthInConsiderationGreaterThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_greater_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_greater_than}.

---

##### `MonthInConsiderationLessThan`<sup>Optional</sup> <a name="MonthInConsiderationLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.monthInConsiderationLessThan"></a>

```go
MonthInConsiderationLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#month_in_consideration_less_than DataOciDataSafeAuditProfileAvailableAuditVolumes#month_in_consideration_less_than}.

---

##### `TrailLocation`<sup>Optional</sup> <a name="TrailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesConfig.property.trailLocation"></a>

```go
TrailLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#trail_location DataOciDataSafeAuditProfileAvailableAuditVolumes#trail_location}.

---

### DataOciDataSafeAuditProfileAvailableAuditVolumesFilter <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

&dataocidatasafeauditprofileavailableauditvolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#name DataOciDataSafeAuditProfileAvailableAuditVolumes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#values DataOciDataSafeAuditProfileAvailableAuditVolumes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#regex DataOciDataSafeAuditProfileAvailableAuditVolumes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#name DataOciDataSafeAuditProfileAvailableAuditVolumes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#values DataOciDataSafeAuditProfileAvailableAuditVolumes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_audit_profile_available_audit_volumes#regex DataOciDataSafeAuditProfileAvailableAuditVolumes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

dataocidatasafeauditprofileavailableauditvolumes.NewDataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

dataocidatasafeauditprofileavailableauditvolumes.NewDataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.auditProfileId">AuditProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.auditTrailId">AuditTrailId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.databaseUniqueName">DatabaseUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.monthInConsideration">MonthInConsideration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.trailLocation">TrailLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.volume">Volume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditProfileId`<sup>Required</sup> <a name="AuditProfileId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.auditProfileId"></a>

```go
func AuditProfileId() *string
```

- *Type:* *string

---

##### `AuditTrailId`<sup>Required</sup> <a name="AuditTrailId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.auditTrailId"></a>

```go
func AuditTrailId() *string
```

- *Type:* *string

---

##### `DatabaseUniqueName`<sup>Required</sup> <a name="DatabaseUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.databaseUniqueName"></a>

```go
func DatabaseUniqueName() *string
```

- *Type:* *string

---

##### `MonthInConsideration`<sup>Required</sup> <a name="MonthInConsideration" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.monthInConsideration"></a>

```go
func MonthInConsideration() *string
```

- *Type:* *string

---

##### `TrailLocation`<sup>Required</sup> <a name="TrailLocation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.trailLocation"></a>

```go
func TrailLocation() *string
```

- *Type:* *string

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.volume"></a>

```go
func Volume() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItems</a>

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

dataocidatasafeauditprofileavailableauditvolumes.NewDataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

dataocidatasafeauditprofileavailableauditvolumes.NewDataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItems</a>

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

dataocidatasafeauditprofileavailableauditvolumes.NewDataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

dataocidatasafeauditprofileavailableauditvolumes.NewDataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection">DataOciDataSafeAuditProfileAvailableAuditVolumesAvailableAuditVolumeCollection</a>

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

dataocidatasafeauditprofileavailableauditvolumes.NewDataOciDataSafeAuditProfileAvailableAuditVolumesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference <a name="DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafeauditprofileavailableauditvolumes"

dataocidatasafeauditprofileavailableauditvolumes.NewDataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeAuditProfileAvailableAuditVolumes.DataOciDataSafeAuditProfileAvailableAuditVolumesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



