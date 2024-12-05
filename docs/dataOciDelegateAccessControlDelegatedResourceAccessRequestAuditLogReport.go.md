# `dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport` Submodule <a name="`dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report oci_delegate_access_control_delegated_resource_access_request_audit_log_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequestauditlogreport"

dataocidelegateaccesscontroldelegatedresourceaccessrequestauditlogreport.NewDataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport(scope Construct, id *string, config DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig) DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig">DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig">DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetIsProcessTreeEnabled">ResetIsProcessTreeEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetId"></a>

```go
func ResetId()
```

##### `ResetIsProcessTreeEnabled` <a name="ResetIsProcessTreeEnabled" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetIsProcessTreeEnabled"></a>

```go
func ResetIsProcessTreeEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequestauditlogreport"

dataocidelegateaccesscontroldelegatedresourceaccessrequestauditlogreport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequestauditlogreport"

dataocidelegateaccesscontroldelegatedresourceaccessrequestauditlogreport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequestauditlogreport"

dataocidelegateaccesscontroldelegatedresourceaccessrequestauditlogreport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequestauditlogreport"

dataocidelegateaccesscontroldelegatedresourceaccessrequestauditlogreport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.auditReportStatus">AuditReportStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.processTree">ProcessTree</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.report">Report</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.timeReportGenerated">TimeReportGenerated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.delegatedResourceAccessRequestIdInput">DelegatedResourceAccessRequestIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.isProcessTreeEnabledInput">IsProcessTreeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.delegatedResourceAccessRequestId">DelegatedResourceAccessRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.isProcessTreeEnabled">IsProcessTreeEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AuditReportStatus`<sup>Required</sup> <a name="AuditReportStatus" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.auditReportStatus"></a>

```go
func AuditReportStatus() *string
```

- *Type:* *string

---

##### `ProcessTree`<sup>Required</sup> <a name="ProcessTree" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.processTree"></a>

```go
func ProcessTree() *string
```

- *Type:* *string

---

##### `Report`<sup>Required</sup> <a name="Report" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.report"></a>

```go
func Report() *string
```

- *Type:* *string

---

##### `TimeReportGenerated`<sup>Required</sup> <a name="TimeReportGenerated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.timeReportGenerated"></a>

```go
func TimeReportGenerated() *string
```

- *Type:* *string

---

##### `DelegatedResourceAccessRequestIdInput`<sup>Optional</sup> <a name="DelegatedResourceAccessRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.delegatedResourceAccessRequestIdInput"></a>

```go
func DelegatedResourceAccessRequestIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsProcessTreeEnabledInput`<sup>Optional</sup> <a name="IsProcessTreeEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.isProcessTreeEnabledInput"></a>

```go
func IsProcessTreeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DelegatedResourceAccessRequestId`<sup>Required</sup> <a name="DelegatedResourceAccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.delegatedResourceAccessRequestId"></a>

```go
func DelegatedResourceAccessRequestId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsProcessTreeEnabled`<sup>Required</sup> <a name="IsProcessTreeEnabled" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.isProcessTreeEnabled"></a>

```go
func IsProcessTreeEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidelegateaccesscontroldelegatedresourceaccessrequestauditlogreport"

&dataocidelegateaccesscontroldelegatedresourceaccessrequestauditlogreport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DelegatedResourceAccessRequestId: *string,
	Id: *string,
	IsProcessTreeEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.delegatedResourceAccessRequestId">DelegatedResourceAccessRequestId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#delegated_resource_access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.isProcessTreeEnabled">IsProcessTreeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#is_process_tree_enabled DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#is_process_tree_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DelegatedResourceAccessRequestId`<sup>Required</sup> <a name="DelegatedResourceAccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.delegatedResourceAccessRequestId"></a>

```go
DelegatedResourceAccessRequestId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#delegated_resource_access_request_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsProcessTreeEnabled`<sup>Optional</sup> <a name="IsProcessTreeEnabled" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.isProcessTreeEnabled"></a>

```go
IsProcessTreeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#is_process_tree_enabled DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#is_process_tree_enabled}.

---



