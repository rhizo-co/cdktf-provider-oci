# `dataOciDatabaseMigrationJobAdvisorReport` Submodule <a name="`dataOciDatabaseMigrationJobAdvisorReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMigrationJobAdvisorReport <a name="DataOciDatabaseMigrationJobAdvisorReport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report oci_database_migration_job_advisor_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationjobadvisorreport"

dataocidatabasemigrationjobadvisorreport.NewDataOciDatabaseMigrationJobAdvisorReport(scope Construct, id *string, config DataOciDatabaseMigrationJobAdvisorReportConfig) DataOciDatabaseMigrationJobAdvisorReport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig">DataOciDatabaseMigrationJobAdvisorReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig">DataOciDatabaseMigrationJobAdvisorReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMigrationJobAdvisorReport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationjobadvisorreport"

dataocidatabasemigrationjobadvisorreport.DataOciDatabaseMigrationJobAdvisorReport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationjobadvisorreport"

dataocidatabasemigrationjobadvisorreport.DataOciDatabaseMigrationJobAdvisorReport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationjobadvisorreport"

dataocidatabasemigrationjobadvisorreport.DataOciDatabaseMigrationJobAdvisorReport_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationjobadvisorreport"

dataocidatabasemigrationjobadvisorreport.DataOciDatabaseMigrationJobAdvisorReport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseMigrationJobAdvisorReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseMigrationJobAdvisorReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseMigrationJobAdvisorReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMigrationJobAdvisorReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatal">NumberOfFatal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatalBlockers">NumberOfFatalBlockers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfInformationalResults">NumberOfInformationalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfWarnings">NumberOfWarnings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.reportLocationDetails">ReportLocationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.result">Result</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobIdInput">JobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `NumberOfFatal`<sup>Required</sup> <a name="NumberOfFatal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatal"></a>

```go
func NumberOfFatal() *f64
```

- *Type:* *f64

---

##### `NumberOfFatalBlockers`<sup>Required</sup> <a name="NumberOfFatalBlockers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatalBlockers"></a>

```go
func NumberOfFatalBlockers() *f64
```

- *Type:* *f64

---

##### `NumberOfInformationalResults`<sup>Required</sup> <a name="NumberOfInformationalResults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfInformationalResults"></a>

```go
func NumberOfInformationalResults() *f64
```

- *Type:* *f64

---

##### `NumberOfWarnings`<sup>Required</sup> <a name="NumberOfWarnings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfWarnings"></a>

```go
func NumberOfWarnings() *f64
```

- *Type:* *f64

---

##### `ReportLocationDetails`<sup>Required</sup> <a name="ReportLocationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.reportLocationDetails"></a>

```go
func ReportLocationDetails() DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.result"></a>

```go
func Result() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobIdInput"></a>

```go
func JobIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMigrationJobAdvisorReportConfig <a name="DataOciDatabaseMigrationJobAdvisorReportConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationjobadvisorreport"

&dataocidatabasemigrationjobadvisorreport.DataOciDatabaseMigrationJobAdvisorReportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	JobId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.jobId">JobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#job_id DataOciDatabaseMigrationJobAdvisorReport#job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#id DataOciDatabaseMigrationJobAdvisorReport#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.jobId"></a>

```go
JobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#job_id DataOciDatabaseMigrationJobAdvisorReport#job_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#id DataOciDatabaseMigrationJobAdvisorReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationjobadvisorreport"

&dataocidatabasemigrationjobadvisorreport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails {

}
```


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationjobadvisorreport"

&dataocidatabasemigrationjobadvisorreport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationjobadvisorreport"

dataocidatabasemigrationjobadvisorreport.NewDataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationjobadvisorreport"

dataocidatabasemigrationjobadvisorreport.NewDataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationjobadvisorreport"

dataocidatabasemigrationjobadvisorreport.NewDataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails</a>

---


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemigrationjobadvisorreport"

dataocidatabasemigrationjobadvisorreport.NewDataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.locationInSource">LocationInSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.objectStorageDetails">ObjectStorageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationInSource`<sup>Required</sup> <a name="LocationInSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.locationInSource"></a>

```go
func LocationInSource() *string
```

- *Type:* *string

---

##### `ObjectStorageDetails`<sup>Required</sup> <a name="ObjectStorageDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.objectStorageDetails"></a>

```go
func ObjectStorageDetails() DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails</a>

---



