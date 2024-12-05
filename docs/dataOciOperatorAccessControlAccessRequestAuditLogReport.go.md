# `dataOciOperatorAccessControlAccessRequestAuditLogReport` Submodule <a name="`dataOciOperatorAccessControlAccessRequestAuditLogReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlAccessRequestAuditLogReport <a name="DataOciOperatorAccessControlAccessRequestAuditLogReport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report oci_operator_access_control_access_request_audit_log_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequestauditlogreport"

dataocioperatoraccesscontrolaccessrequestauditlogreport.NewDataOciOperatorAccessControlAccessRequestAuditLogReport(scope Construct, id *string, config DataOciOperatorAccessControlAccessRequestAuditLogReportConfig) DataOciOperatorAccessControlAccessRequestAuditLogReport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig">DataOciOperatorAccessControlAccessRequestAuditLogReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig">DataOciOperatorAccessControlAccessRequestAuditLogReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.resetEnableProcessTree">ResetEnableProcessTree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEnableProcessTree` <a name="ResetEnableProcessTree" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.resetEnableProcessTree"></a>

```go
func ResetEnableProcessTree()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequestAuditLogReport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequestauditlogreport"

dataocioperatoraccesscontrolaccessrequestauditlogreport.DataOciOperatorAccessControlAccessRequestAuditLogReport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequestauditlogreport"

dataocioperatoraccesscontrolaccessrequestauditlogreport.DataOciOperatorAccessControlAccessRequestAuditLogReport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequestauditlogreport"

dataocioperatoraccesscontrolaccessrequestauditlogreport.DataOciOperatorAccessControlAccessRequestAuditLogReport_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequestauditlogreport"

dataocioperatoraccesscontrolaccessrequestauditlogreport.DataOciOperatorAccessControlAccessRequestAuditLogReport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequestAuditLogReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequestAuditLogReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOperatorAccessControlAccessRequestAuditLogReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequestAuditLogReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.auditReportStatus">AuditReportStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.processTree">ProcessTree</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.report">Report</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.timeOfReportGeneration">TimeOfReportGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.accessRequestIdInput">AccessRequestIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.enableProcessTreeInput">EnableProcessTreeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.accessRequestId">AccessRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.enableProcessTree">EnableProcessTree</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AuditReportStatus`<sup>Required</sup> <a name="AuditReportStatus" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.auditReportStatus"></a>

```go
func AuditReportStatus() *string
```

- *Type:* *string

---

##### `ProcessTree`<sup>Required</sup> <a name="ProcessTree" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.processTree"></a>

```go
func ProcessTree() *string
```

- *Type:* *string

---

##### `Report`<sup>Required</sup> <a name="Report" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.report"></a>

```go
func Report() *string
```

- *Type:* *string

---

##### `TimeOfReportGeneration`<sup>Required</sup> <a name="TimeOfReportGeneration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.timeOfReportGeneration"></a>

```go
func TimeOfReportGeneration() *string
```

- *Type:* *string

---

##### `AccessRequestIdInput`<sup>Optional</sup> <a name="AccessRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.accessRequestIdInput"></a>

```go
func AccessRequestIdInput() *string
```

- *Type:* *string

---

##### `EnableProcessTreeInput`<sup>Optional</sup> <a name="EnableProcessTreeInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.enableProcessTreeInput"></a>

```go
func EnableProcessTreeInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AccessRequestId`<sup>Required</sup> <a name="AccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.accessRequestId"></a>

```go
func AccessRequestId() *string
```

- *Type:* *string

---

##### `EnableProcessTree`<sup>Required</sup> <a name="EnableProcessTree" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.enableProcessTree"></a>

```go
func EnableProcessTree() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlAccessRequestAuditLogReportConfig <a name="DataOciOperatorAccessControlAccessRequestAuditLogReportConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioperatoraccesscontrolaccessrequestauditlogreport"

&dataocioperatoraccesscontrolaccessrequestauditlogreport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessRequestId: *string,
	EnableProcessTree: *f64,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.accessRequestId">AccessRequestId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#access_request_id DataOciOperatorAccessControlAccessRequestAuditLogReport#access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.enableProcessTree">EnableProcessTree</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#enable_process_tree DataOciOperatorAccessControlAccessRequestAuditLogReport#enable_process_tree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#id DataOciOperatorAccessControlAccessRequestAuditLogReport#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessRequestId`<sup>Required</sup> <a name="AccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.accessRequestId"></a>

```go
AccessRequestId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#access_request_id DataOciOperatorAccessControlAccessRequestAuditLogReport#access_request_id}.

---

##### `EnableProcessTree`<sup>Optional</sup> <a name="EnableProcessTree" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.enableProcessTree"></a>

```go
EnableProcessTree *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#enable_process_tree DataOciOperatorAccessControlAccessRequestAuditLogReport#enable_process_tree}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestAuditLogReport.DataOciOperatorAccessControlAccessRequestAuditLogReportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_audit_log_report#id DataOciOperatorAccessControlAccessRequestAuditLogReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



