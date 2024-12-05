# `dataOciDataSafeSecurityPolicyReportRoleGrantPaths` Submodule <a name="`dataOciDataSafeSecurityPolicyReportRoleGrantPaths` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyReportRoleGrantPaths <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPaths" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths oci_data_safe_security_policy_report_role_grant_paths}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

dataocidatasafesecuritypolicyreportrolegrantpaths.NewDataOciDataSafeSecurityPolicyReportRoleGrantPaths(scope Construct, id *string, config DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig) DataOciDataSafeSecurityPolicyReportRoleGrantPaths
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig">DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig">DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportRoleGrantPaths resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

dataocidatasafesecuritypolicyreportrolegrantpaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

dataocidatasafesecuritypolicyreportrolegrantpaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

dataocidatasafesecuritypolicyreportrolegrantpaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

dataocidatasafesecuritypolicyreportrolegrantpaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportRoleGrantPaths resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportRoleGrantPaths to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeSecurityPolicyReportRoleGrantPaths that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportRoleGrantPaths to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.roleGrantPathCollection">RoleGrantPathCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRoleInput">GrantedRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.granteeInput">GranteeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportIdInput">SecurityPolicyReportIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRole">GrantedRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantee">Grantee</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportId">SecurityPolicyReportId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filter"></a>

```go
func Filter() DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList</a>

---

##### `RoleGrantPathCollection`<sup>Required</sup> <a name="RoleGrantPathCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.roleGrantPathCollection"></a>

```go
func RoleGrantPathCollection() DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `GrantedRoleInput`<sup>Optional</sup> <a name="GrantedRoleInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRoleInput"></a>

```go
func GrantedRoleInput() *string
```

- *Type:* *string

---

##### `GranteeInput`<sup>Optional</sup> <a name="GranteeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.granteeInput"></a>

```go
func GranteeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SecurityPolicyReportIdInput`<sup>Optional</sup> <a name="SecurityPolicyReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportIdInput"></a>

```go
func SecurityPolicyReportIdInput() *string
```

- *Type:* *string

---

##### `GrantedRole`<sup>Required</sup> <a name="GrantedRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRole"></a>

```go
func GrantedRole() *string
```

- *Type:* *string

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantee"></a>

```go
func Grantee() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecurityPolicyReportId`<sup>Required</sup> <a name="SecurityPolicyReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportId"></a>

```go
func SecurityPolicyReportId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

&dataocidatasafesecuritypolicyreportrolegrantpaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GrantedRole: *string,
	Grantee: *string,
	SecurityPolicyReportId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantedRole">GrantedRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#granted_role DataOciDataSafeSecurityPolicyReportRoleGrantPaths#granted_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantee">Grantee</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#grantee DataOciDataSafeSecurityPolicyReportRoleGrantPaths#grantee}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.securityPolicyReportId">SecurityPolicyReportId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#security_policy_report_id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GrantedRole`<sup>Required</sup> <a name="GrantedRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantedRole"></a>

```go
GrantedRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#granted_role DataOciDataSafeSecurityPolicyReportRoleGrantPaths#granted_role}.

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantee"></a>

```go
Grantee *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#grantee DataOciDataSafeSecurityPolicyReportRoleGrantPaths#grantee}.

---

##### `SecurityPolicyReportId`<sup>Required</sup> <a name="SecurityPolicyReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.securityPolicyReportId"></a>

```go
SecurityPolicyReportId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#security_policy_report_id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#security_policy_report_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#filter DataOciDataSafeSecurityPolicyReportRoleGrantPaths#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

&dataocidatasafesecuritypolicyreportrolegrantpaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#name DataOciDataSafeSecurityPolicyReportRoleGrantPaths#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#values DataOciDataSafeSecurityPolicyReportRoleGrantPaths#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#regex DataOciDataSafeSecurityPolicyReportRoleGrantPaths#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#name DataOciDataSafeSecurityPolicyReportRoleGrantPaths#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#values DataOciDataSafeSecurityPolicyReportRoleGrantPaths#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#regex DataOciDataSafeSecurityPolicyReportRoleGrantPaths#regex}.

---

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

&dataocidatasafesecuritypolicyreportrolegrantpaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection {

}
```


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

&dataocidatasafesecuritypolicyreportrolegrantpaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

dataocidatasafesecuritypolicyreportrolegrantpaths.NewDataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

dataocidatasafesecuritypolicyreportrolegrantpaths.NewDataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

dataocidatasafesecuritypolicyreportrolegrantpaths.NewDataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

dataocidatasafesecuritypolicyreportrolegrantpaths.NewDataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.depthLevel">DepthLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantedRole">GrantedRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantee">Grantee</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DepthLevel`<sup>Required</sup> <a name="DepthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.depthLevel"></a>

```go
func DepthLevel() *f64
```

- *Type:* *f64

---

##### `GrantedRole`<sup>Required</sup> <a name="GrantedRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantedRole"></a>

```go
func GrantedRole() *string
```

- *Type:* *string

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantee"></a>

```go
func Grantee() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems</a>

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

dataocidatasafesecuritypolicyreportrolegrantpaths.NewDataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesecuritypolicyreportrolegrantpaths"

dataocidatasafesecuritypolicyreportrolegrantpaths.NewDataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection</a>

---



