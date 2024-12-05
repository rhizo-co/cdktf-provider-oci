# `dataOciFleetAppsManagementFleetComplianceReport` Submodule <a name="`dataOciFleetAppsManagementFleetComplianceReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementFleetComplianceReport <a name="DataOciFleetAppsManagementFleetComplianceReport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report oci_fleet_apps_management_fleet_compliance_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.NewDataOciFleetAppsManagementFleetComplianceReport(scope Construct, id *string, config DataOciFleetAppsManagementFleetComplianceReportConfig) DataOciFleetAppsManagementFleetComplianceReport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig">DataOciFleetAppsManagementFleetComplianceReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig">DataOciFleetAppsManagementFleetComplianceReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementFleetComplianceReport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.DataOciFleetAppsManagementFleetComplianceReport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.DataOciFleetAppsManagementFleetComplianceReport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.DataOciFleetAppsManagementFleetComplianceReport_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.DataOciFleetAppsManagementFleetComplianceReport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFleetAppsManagementFleetComplianceReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFleetAppsManagementFleetComplianceReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFleetAppsManagementFleetComplianceReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementFleetComplianceReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceState">ComplianceState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.resources">Resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList">DataOciFleetAppsManagementFleetComplianceReportResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportIdInput">ComplianceReportIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetIdInput">FleetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportId">ComplianceReportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ComplianceState`<sup>Required</sup> <a name="ComplianceState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceState"></a>

```go
func ComplianceState() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.resources"></a>

```go
func Resources() DataOciFleetAppsManagementFleetComplianceReportResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList">DataOciFleetAppsManagementFleetComplianceReportResourcesList</a>

---

##### `ComplianceReportIdInput`<sup>Optional</sup> <a name="ComplianceReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportIdInput"></a>

```go
func ComplianceReportIdInput() *string
```

- *Type:* *string

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetIdInput"></a>

```go
func FleetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ComplianceReportId`<sup>Required</sup> <a name="ComplianceReportId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.complianceReportId"></a>

```go
func ComplianceReportId() *string
```

- *Type:* *string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementFleetComplianceReportConfig <a name="DataOciFleetAppsManagementFleetComplianceReportConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

&dataocifleetappsmanagementfleetcompliancereport.DataOciFleetAppsManagementFleetComplianceReportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ComplianceReportId: *string,
	FleetId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.complianceReportId">ComplianceReportId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#compliance_report_id DataOciFleetAppsManagementFleetComplianceReport#compliance_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.fleetId">FleetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#fleet_id DataOciFleetAppsManagementFleetComplianceReport#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#id DataOciFleetAppsManagementFleetComplianceReport#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComplianceReportId`<sup>Required</sup> <a name="ComplianceReportId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.complianceReportId"></a>

```go
ComplianceReportId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#compliance_report_id DataOciFleetAppsManagementFleetComplianceReport#compliance_report_id}.

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.fleetId"></a>

```go
FleetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#fleet_id DataOciFleetAppsManagementFleetComplianceReport#fleet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_compliance_report#id DataOciFleetAppsManagementFleetComplianceReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFleetAppsManagementFleetComplianceReportResources <a name="DataOciFleetAppsManagementFleetComplianceReportResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

&dataocifleetappsmanagementfleetcompliancereport.DataOciFleetAppsManagementFleetComplianceReportResources {

}
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProducts <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProducts" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

&dataocifleetappsmanagementfleetcompliancereport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts {

}
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

&dataocifleetappsmanagementfleetcompliancereport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets {

}
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

&dataocifleetappsmanagementfleetcompliancereport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches {

}
```


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

&dataocifleetappsmanagementfleetcompliancereport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementFleetComplianceReportResourcesList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.NewDataOciFleetAppsManagementFleetComplianceReportResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementFleetComplianceReportResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.NewDataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.compartment">Compartment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.complianceState">ComplianceState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.products">Products</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceRegion">ResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyId">TenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyName">TenancyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources">DataOciFleetAppsManagementFleetComplianceReportResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compartment`<sup>Required</sup> <a name="Compartment" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.compartment"></a>

```go
func Compartment() *string
```

- *Type:* *string

---

##### `ComplianceState`<sup>Required</sup> <a name="ComplianceState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.complianceState"></a>

```go
func ComplianceState() *string
```

- *Type:* *string

---

##### `Products`<sup>Required</sup> <a name="Products" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.products"></a>

```go
func Products() DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceRegion"></a>

```go
func ResourceRegion() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyId"></a>

```go
func TenancyId() *string
```

- *Type:* *string

---

##### `TenancyName`<sup>Required</sup> <a name="TenancyName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.tenancyName"></a>

```go
func TenancyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementFleetComplianceReportResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResources">DataOciFleetAppsManagementFleetComplianceReportResources</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.NewDataOciFleetAppsManagementFleetComplianceReportResourcesProductsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.NewDataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.productName">ProductName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.targets">Targets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts">DataOciFleetAppsManagementFleetComplianceReportResourcesProducts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.productName"></a>

```go
func ProductName() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.targets"></a>

```go
func Targets() DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementFleetComplianceReportResourcesProducts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProducts">DataOciFleetAppsManagementFleetComplianceReportResourcesProducts</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.NewDataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.NewDataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchDescription">PatchDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchName">PatchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchType">PatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeApplied">TimeApplied</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeReleased">TimeReleased</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PatchDescription`<sup>Required</sup> <a name="PatchDescription" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchDescription"></a>

```go
func PatchDescription() *string
```

- *Type:* *string

---

##### `PatchName`<sup>Required</sup> <a name="PatchName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchName"></a>

```go
func PatchName() *string
```

- *Type:* *string

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.patchType"></a>

```go
func PatchType() *string
```

- *Type:* *string

---

##### `TimeApplied`<sup>Required</sup> <a name="TimeApplied" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeApplied"></a>

```go
func TimeApplied() *string
```

- *Type:* *string

---

##### `TimeReleased`<sup>Required</sup> <a name="TimeReleased" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.timeReleased"></a>

```go
func TimeReleased() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatches</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.NewDataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.NewDataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.complianceState">ComplianceState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.installedPatches">InstalledPatches</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.recommendedPatches">RecommendedPatches</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetName">TargetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComplianceState`<sup>Required</sup> <a name="ComplianceState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.complianceState"></a>

```go
func ComplianceState() *string
```

- *Type:* *string

---

##### `InstalledPatches`<sup>Required</sup> <a name="InstalledPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.installedPatches"></a>

```go
func InstalledPatches() DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsInstalledPatchesList</a>

---

##### `RecommendedPatches`<sup>Required</sup> <a name="RecommendedPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.recommendedPatches"></a>

```go
func RecommendedPatches() DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList</a>

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.targetName"></a>

```go
func TargetName() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargets</a>

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.NewDataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference <a name="DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleetcompliancereport"

dataocifleetappsmanagementfleetcompliancereport.NewDataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchDescription">PatchDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchName">PatchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchType">PatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeApplied">TimeApplied</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeReleased">TimeReleased</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PatchDescription`<sup>Required</sup> <a name="PatchDescription" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchDescription"></a>

```go
func PatchDescription() *string
```

- *Type:* *string

---

##### `PatchName`<sup>Required</sup> <a name="PatchName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchName"></a>

```go
func PatchName() *string
```

- *Type:* *string

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.patchType"></a>

```go
func PatchType() *string
```

- *Type:* *string

---

##### `TimeApplied`<sup>Required</sup> <a name="TimeApplied" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeApplied"></a>

```go
func TimeApplied() *string
```

- *Type:* *string

---

##### `TimeReleased`<sup>Required</sup> <a name="TimeReleased" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.timeReleased"></a>

```go
func TimeReleased() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatchesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetComplianceReport.DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches">DataOciFleetAppsManagementFleetComplianceReportResourcesProductsTargetsRecommendedPatches</a>

---



