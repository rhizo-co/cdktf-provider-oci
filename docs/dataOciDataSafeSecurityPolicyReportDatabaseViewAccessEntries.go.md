# `dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries` Submodule <a name="`dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries oci_data_safe_security_policy_report_database_view_access_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.NewDataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries(scope Construct, id *string, config DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig) DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetScimQuery">ResetScimQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetId"></a>

```go
func ResetId()
```

##### `ResetScimQuery` <a name="ResetScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetScimQuery"></a>

```go
func ResetScimQuery()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.resetTargetId"></a>

```go
func ResetTargetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.databaseViewAccessEntryCollection">DatabaseViewAccessEntryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.scimQueryInput">ScimQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.securityPolicyReportIdInput">SecurityPolicyReportIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.scimQuery">ScimQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.securityPolicyReportId">SecurityPolicyReportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DatabaseViewAccessEntryCollection`<sup>Required</sup> <a name="DatabaseViewAccessEntryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.databaseViewAccessEntryCollection"></a>

```go
func DatabaseViewAccessEntryCollection() DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.filter"></a>

```go
func Filter() DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ScimQueryInput`<sup>Optional</sup> <a name="ScimQueryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.scimQueryInput"></a>

```go
func ScimQueryInput() *string
```

- *Type:* *string

---

##### `SecurityPolicyReportIdInput`<sup>Optional</sup> <a name="SecurityPolicyReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.securityPolicyReportIdInput"></a>

```go
func SecurityPolicyReportIdInput() *string
```

- *Type:* *string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ScimQuery`<sup>Required</sup> <a name="ScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.scimQuery"></a>

```go
func ScimQuery() *string
```

- *Type:* *string

---

##### `SecurityPolicyReportId`<sup>Required</sup> <a name="SecurityPolicyReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.securityPolicyReportId"></a>

```go
func SecurityPolicyReportId() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

&dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SecurityPolicyReportId: *string,
	Filter: interface{},
	Id: *string,
	ScimQuery: *string,
	TargetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.securityPolicyReportId">SecurityPolicyReportId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.scimQuery">ScimQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#scim_query DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#scim_query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#target_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#target_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecurityPolicyReportId`<sup>Required</sup> <a name="SecurityPolicyReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.securityPolicyReportId"></a>

```go
SecurityPolicyReportId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#security_policy_report_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#security_policy_report_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#filter DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScimQuery`<sup>Optional</sup> <a name="ScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.scimQuery"></a>

```go
ScimQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#scim_query DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#scim_query}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#target_id DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#target_id}.

---

### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

&dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection {

}
```


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

&dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems {

}
```


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

&dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#name DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#values DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#regex DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#name DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#values DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_database_view_access_entries#regex DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.NewDataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.NewDataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.grantee">Grantee</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.grantFromRole">GrantFromRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.grantor">Grantor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByDatabaseVault">IsAccessConstrainedByDatabaseVault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByRealApplicationSecurity">IsAccessConstrainedByRealApplicationSecurity</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByRedaction">IsAccessConstrainedByRedaction</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedBySqlFirewall">IsAccessConstrainedBySqlFirewall</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByVirtualPrivateDatabase">IsAccessConstrainedByVirtualPrivateDatabase</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.privilege">Privilege</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.privilegeGrantable">PrivilegeGrantable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.privilegeType">PrivilegeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.tableSchema">TableSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.viewName">ViewName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.viewSchema">ViewSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.viewText">ViewText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.grantee"></a>

```go
func Grantee() *string
```

- *Type:* *string

---

##### `GrantFromRole`<sup>Required</sup> <a name="GrantFromRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.grantFromRole"></a>

```go
func GrantFromRole() *string
```

- *Type:* *string

---

##### `Grantor`<sup>Required</sup> <a name="Grantor" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.grantor"></a>

```go
func Grantor() *string
```

- *Type:* *string

---

##### `IsAccessConstrainedByDatabaseVault`<sup>Required</sup> <a name="IsAccessConstrainedByDatabaseVault" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByDatabaseVault"></a>

```go
func IsAccessConstrainedByDatabaseVault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsAccessConstrainedByRealApplicationSecurity`<sup>Required</sup> <a name="IsAccessConstrainedByRealApplicationSecurity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByRealApplicationSecurity"></a>

```go
func IsAccessConstrainedByRealApplicationSecurity() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsAccessConstrainedByRedaction`<sup>Required</sup> <a name="IsAccessConstrainedByRedaction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByRedaction"></a>

```go
func IsAccessConstrainedByRedaction() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsAccessConstrainedBySqlFirewall`<sup>Required</sup> <a name="IsAccessConstrainedBySqlFirewall" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedBySqlFirewall"></a>

```go
func IsAccessConstrainedBySqlFirewall() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsAccessConstrainedByVirtualPrivateDatabase`<sup>Required</sup> <a name="IsAccessConstrainedByVirtualPrivateDatabase" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.isAccessConstrainedByVirtualPrivateDatabase"></a>

```go
func IsAccessConstrainedByVirtualPrivateDatabase() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Privilege`<sup>Required</sup> <a name="Privilege" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.privilege"></a>

```go
func Privilege() *string
```

- *Type:* *string

---

##### `PrivilegeGrantable`<sup>Required</sup> <a name="PrivilegeGrantable" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.privilegeGrantable"></a>

```go
func PrivilegeGrantable() *string
```

- *Type:* *string

---

##### `PrivilegeType`<sup>Required</sup> <a name="PrivilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.privilegeType"></a>

```go
func PrivilegeType() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `TableSchema`<sup>Required</sup> <a name="TableSchema" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.tableSchema"></a>

```go
func TableSchema() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `ViewName`<sup>Required</sup> <a name="ViewName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.viewName"></a>

```go
func ViewName() *string
```

- *Type:* *string

---

##### `ViewSchema`<sup>Required</sup> <a name="ViewSchema" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.viewSchema"></a>

```go
func ViewSchema() *string
```

- *Type:* *string

---

##### `ViewText`<sup>Required</sup> <a name="ViewText" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.viewText"></a>

```go
func ViewText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItems</a>

---


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.NewDataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.NewDataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection">DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesDatabaseViewAccessEntryCollection</a>

---


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.NewDataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference <a name="DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportdatabaseviewaccessentries"

dataocidatasafesecuritypolicyreportdatabaseviewaccessentries.NewDataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntries.DataOciDataSafeSecurityPolicyReportDatabaseViewAccessEntriesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



