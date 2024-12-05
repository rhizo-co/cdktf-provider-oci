# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings oci_database_management_managed_database_sql_tuning_advisor_tasks_findings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.NewDataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetBeginExecId">ResetBeginExecId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetEndExecId">ResetEndExecId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetFindingFilter">ResetFindingFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetIndexHashFilter">ResetIndexHashFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetSearchPeriod">ResetSearchPeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetStatsHashFilter">ResetStatsHashFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBeginExecId` <a name="ResetBeginExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetBeginExecId"></a>

```go
func ResetBeginExecId()
```

##### `ResetEndExecId` <a name="ResetEndExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetEndExecId"></a>

```go
func ResetEndExecId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetFindingFilter` <a name="ResetFindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetFindingFilter"></a>

```go
func ResetFindingFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetId"></a>

```go
func ResetId()
```

##### `ResetIndexHashFilter` <a name="ResetIndexHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetIndexHashFilter"></a>

```go
func ResetIndexHashFilter()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetOpcNamedCredentialId"></a>

```go
func ResetOpcNamedCredentialId()
```

##### `ResetSearchPeriod` <a name="ResetSearchPeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetSearchPeriod"></a>

```go
func ResetSearchPeriod()
```

##### `ResetStatsHashFilter` <a name="ResetStatsHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.resetStatsHashFilter"></a>

```go
func ResetStatsHashFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.sqlTuningAdvisorTaskFindingCollection">SqlTuningAdvisorTaskFindingCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.beginExecIdInput">BeginExecIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.endExecIdInput">EndExecIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.findingFilterInput">FindingFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.indexHashFilterInput">IndexHashFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.searchPeriodInput">SearchPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.sqlTuningAdvisorTaskIdInput">SqlTuningAdvisorTaskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.statsHashFilterInput">StatsHashFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.beginExecId">BeginExecId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.endExecId">EndExecId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.findingFilter">FindingFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.indexHashFilter">IndexHashFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.searchPeriod">SearchPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.sqlTuningAdvisorTaskId">SqlTuningAdvisorTaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.statsHashFilter">StatsHashFilter</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList</a>

---

##### `SqlTuningAdvisorTaskFindingCollection`<sup>Required</sup> <a name="SqlTuningAdvisorTaskFindingCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.sqlTuningAdvisorTaskFindingCollection"></a>

```go
func SqlTuningAdvisorTaskFindingCollection() DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList</a>

---

##### `BeginExecIdInput`<sup>Optional</sup> <a name="BeginExecIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.beginExecIdInput"></a>

```go
func BeginExecIdInput() *string
```

- *Type:* *string

---

##### `EndExecIdInput`<sup>Optional</sup> <a name="EndExecIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.endExecIdInput"></a>

```go
func EndExecIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `FindingFilterInput`<sup>Optional</sup> <a name="FindingFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.findingFilterInput"></a>

```go
func FindingFilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexHashFilterInput`<sup>Optional</sup> <a name="IndexHashFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.indexHashFilterInput"></a>

```go
func IndexHashFilterInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.opcNamedCredentialIdInput"></a>

```go
func OpcNamedCredentialIdInput() *string
```

- *Type:* *string

---

##### `SearchPeriodInput`<sup>Optional</sup> <a name="SearchPeriodInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.searchPeriodInput"></a>

```go
func SearchPeriodInput() *string
```

- *Type:* *string

---

##### `SqlTuningAdvisorTaskIdInput`<sup>Optional</sup> <a name="SqlTuningAdvisorTaskIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.sqlTuningAdvisorTaskIdInput"></a>

```go
func SqlTuningAdvisorTaskIdInput() *string
```

- *Type:* *string

---

##### `StatsHashFilterInput`<sup>Optional</sup> <a name="StatsHashFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.statsHashFilterInput"></a>

```go
func StatsHashFilterInput() *string
```

- *Type:* *string

---

##### `BeginExecId`<sup>Required</sup> <a name="BeginExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.beginExecId"></a>

```go
func BeginExecId() *string
```

- *Type:* *string

---

##### `EndExecId`<sup>Required</sup> <a name="EndExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.endExecId"></a>

```go
func EndExecId() *string
```

- *Type:* *string

---

##### `FindingFilter`<sup>Required</sup> <a name="FindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.findingFilter"></a>

```go
func FindingFilter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexHashFilter`<sup>Required</sup> <a name="IndexHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.indexHashFilter"></a>

```go
func IndexHashFilter() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.opcNamedCredentialId"></a>

```go
func OpcNamedCredentialId() *string
```

- *Type:* *string

---

##### `SearchPeriod`<sup>Required</sup> <a name="SearchPeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.searchPeriod"></a>

```go
func SearchPeriod() *string
```

- *Type:* *string

---

##### `SqlTuningAdvisorTaskId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.sqlTuningAdvisorTaskId"></a>

```go
func SqlTuningAdvisorTaskId() *string
```

- *Type:* *string

---

##### `StatsHashFilter`<sup>Required</sup> <a name="StatsHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.statsHashFilter"></a>

```go
func StatsHashFilter() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

&dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedDatabaseId: *string,
	SqlTuningAdvisorTaskId: *string,
	BeginExecId: *string,
	EndExecId: *string,
	Filter: interface{},
	FindingFilter: *string,
	Id: *string,
	IndexHashFilter: *string,
	OpcNamedCredentialId: *string,
	SearchPeriod: *string,
	StatsHashFilter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.sqlTuningAdvisorTaskId">SqlTuningAdvisorTaskId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.beginExecId">BeginExecId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#begin_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.endExecId">EndExecId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#end_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.findingFilter">FindingFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#finding_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.indexHashFilter">IndexHashFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#index_hash_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.searchPeriod">SearchPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#search_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.statsHashFilter">StatsHashFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#stats_hash_filter}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#managed_database_id}.

---

##### `SqlTuningAdvisorTaskId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.sqlTuningAdvisorTaskId"></a>

```go
SqlTuningAdvisorTaskId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#sql_tuning_advisor_task_id}.

---

##### `BeginExecId`<sup>Optional</sup> <a name="BeginExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.beginExecId"></a>

```go
BeginExecId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#begin_exec_id}.

---

##### `EndExecId`<sup>Optional</sup> <a name="EndExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.endExecId"></a>

```go
EndExecId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#end_exec_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#filter}

---

##### `FindingFilter`<sup>Optional</sup> <a name="FindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.findingFilter"></a>

```go
FindingFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#finding_filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexHashFilter`<sup>Optional</sup> <a name="IndexHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.indexHashFilter"></a>

```go
IndexHashFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#index_hash_filter}.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.opcNamedCredentialId"></a>

```go
OpcNamedCredentialId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#opc_named_credential_id}.

---

##### `SearchPeriod`<sup>Optional</sup> <a name="SearchPeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.searchPeriod"></a>

```go
SearchPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#search_period}.

---

##### `StatsHashFilter`<sup>Optional</sup> <a name="StatsHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsConfig.property.statsHashFilter"></a>

```go
StatsHashFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#stats_hash_filter}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

&dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#name DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#values DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_findings#regex DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings#regex}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

&dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection {

}
```


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

&dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.NewDataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.NewDataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.NewDataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.NewDataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.dbTimeBenefit">DbTimeBenefit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isAlternativePlanFindingPresent">IsAlternativePlanFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isErrorFindingPresent">IsErrorFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isIndexFindingPresent">IsIndexFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isMiscellaneousFindingPresent">IsMiscellaneousFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isRestructureSqlFindingPresent">IsRestructureSqlFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isSqlProfileFindingImplemented">IsSqlProfileFindingImplemented</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isSqlProfileFindingPresent">IsSqlProfileFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isStatsFindingPresent">IsStatsFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isTimeoutFindingPresent">IsTimeoutFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.parsingSchema">ParsingSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.perExecutionPercentage">PerExecutionPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlKey">SqlKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlText">SqlText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId">SqlTuningAdvisorTaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlTuningAdvisorTaskObjectExecutionId">SqlTuningAdvisorTaskObjectExecutionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlTuningAdvisorTaskObjectId">SqlTuningAdvisorTaskObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbTimeBenefit`<sup>Required</sup> <a name="DbTimeBenefit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.dbTimeBenefit"></a>

```go
func DbTimeBenefit() *f64
```

- *Type:* *f64

---

##### `IsAlternativePlanFindingPresent`<sup>Required</sup> <a name="IsAlternativePlanFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isAlternativePlanFindingPresent"></a>

```go
func IsAlternativePlanFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsErrorFindingPresent`<sup>Required</sup> <a name="IsErrorFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isErrorFindingPresent"></a>

```go
func IsErrorFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsIndexFindingPresent`<sup>Required</sup> <a name="IsIndexFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isIndexFindingPresent"></a>

```go
func IsIndexFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsMiscellaneousFindingPresent`<sup>Required</sup> <a name="IsMiscellaneousFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isMiscellaneousFindingPresent"></a>

```go
func IsMiscellaneousFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRestructureSqlFindingPresent`<sup>Required</sup> <a name="IsRestructureSqlFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isRestructureSqlFindingPresent"></a>

```go
func IsRestructureSqlFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSqlProfileFindingImplemented`<sup>Required</sup> <a name="IsSqlProfileFindingImplemented" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isSqlProfileFindingImplemented"></a>

```go
func IsSqlProfileFindingImplemented() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSqlProfileFindingPresent`<sup>Required</sup> <a name="IsSqlProfileFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isSqlProfileFindingPresent"></a>

```go
func IsSqlProfileFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsStatsFindingPresent`<sup>Required</sup> <a name="IsStatsFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isStatsFindingPresent"></a>

```go
func IsStatsFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsTimeoutFindingPresent`<sup>Required</sup> <a name="IsTimeoutFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.isTimeoutFindingPresent"></a>

```go
func IsTimeoutFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ParsingSchema`<sup>Required</sup> <a name="ParsingSchema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.parsingSchema"></a>

```go
func ParsingSchema() *string
```

- *Type:* *string

---

##### `PerExecutionPercentage`<sup>Required</sup> <a name="PerExecutionPercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.perExecutionPercentage"></a>

```go
func PerExecutionPercentage() *f64
```

- *Type:* *f64

---

##### `SqlKey`<sup>Required</sup> <a name="SqlKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlKey"></a>

```go
func SqlKey() *string
```

- *Type:* *string

---

##### `SqlText`<sup>Required</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlText"></a>

```go
func SqlText() *string
```

- *Type:* *string

---

##### `SqlTuningAdvisorTaskId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlTuningAdvisorTaskId"></a>

```go
func SqlTuningAdvisorTaskId() *string
```

- *Type:* *string

---

##### `SqlTuningAdvisorTaskObjectExecutionId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskObjectExecutionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlTuningAdvisorTaskObjectExecutionId"></a>

```go
func SqlTuningAdvisorTaskObjectExecutionId() *string
```

- *Type:* *string

---

##### `SqlTuningAdvisorTaskObjectId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskObjectId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.sqlTuningAdvisorTaskObjectId"></a>

```go
func SqlTuningAdvisorTaskObjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.NewDataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfindings.NewDataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection</a>

---



