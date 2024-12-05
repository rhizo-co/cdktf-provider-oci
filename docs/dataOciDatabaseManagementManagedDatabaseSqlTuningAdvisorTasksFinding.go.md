# `dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding oci_database_management_managed_database_sql_tuning_advisor_tasks_finding}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding.NewDataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetBeginExecId">ResetBeginExecId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetEndExecId">ResetEndExecId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetFindingFilter">ResetFindingFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetIndexHashFilter">ResetIndexHashFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetSearchPeriod">ResetSearchPeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetStatsHashFilter">ResetStatsHashFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBeginExecId` <a name="ResetBeginExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetBeginExecId"></a>

```go
func ResetBeginExecId()
```

##### `ResetEndExecId` <a name="ResetEndExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetEndExecId"></a>

```go
func ResetEndExecId()
```

##### `ResetFindingFilter` <a name="ResetFindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetFindingFilter"></a>

```go
func ResetFindingFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetId"></a>

```go
func ResetId()
```

##### `ResetIndexHashFilter` <a name="ResetIndexHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetIndexHashFilter"></a>

```go
func ResetIndexHashFilter()
```

##### `ResetSearchPeriod` <a name="ResetSearchPeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetSearchPeriod"></a>

```go
func ResetSearchPeriod()
```

##### `ResetStatsHashFilter` <a name="ResetStatsHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.resetStatsHashFilter"></a>

```go
func ResetStatsHashFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.beginExecIdInput">BeginExecIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.endExecIdInput">EndExecIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.findingFilterInput">FindingFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.indexHashFilterInput">IndexHashFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.searchPeriodInput">SearchPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.sqlTuningAdvisorTaskIdInput">SqlTuningAdvisorTaskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.statsHashFilterInput">StatsHashFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.beginExecId">BeginExecId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.endExecId">EndExecId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.findingFilter">FindingFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.indexHashFilter">IndexHashFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.searchPeriod">SearchPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.sqlTuningAdvisorTaskId">SqlTuningAdvisorTaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.statsHashFilter">StatsHashFilter</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList</a>

---

##### `BeginExecIdInput`<sup>Optional</sup> <a name="BeginExecIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.beginExecIdInput"></a>

```go
func BeginExecIdInput() *string
```

- *Type:* *string

---

##### `EndExecIdInput`<sup>Optional</sup> <a name="EndExecIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.endExecIdInput"></a>

```go
func EndExecIdInput() *string
```

- *Type:* *string

---

##### `FindingFilterInput`<sup>Optional</sup> <a name="FindingFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.findingFilterInput"></a>

```go
func FindingFilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexHashFilterInput`<sup>Optional</sup> <a name="IndexHashFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.indexHashFilterInput"></a>

```go
func IndexHashFilterInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `SearchPeriodInput`<sup>Optional</sup> <a name="SearchPeriodInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.searchPeriodInput"></a>

```go
func SearchPeriodInput() *string
```

- *Type:* *string

---

##### `SqlTuningAdvisorTaskIdInput`<sup>Optional</sup> <a name="SqlTuningAdvisorTaskIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.sqlTuningAdvisorTaskIdInput"></a>

```go
func SqlTuningAdvisorTaskIdInput() *string
```

- *Type:* *string

---

##### `StatsHashFilterInput`<sup>Optional</sup> <a name="StatsHashFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.statsHashFilterInput"></a>

```go
func StatsHashFilterInput() *string
```

- *Type:* *string

---

##### `BeginExecId`<sup>Required</sup> <a name="BeginExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.beginExecId"></a>

```go
func BeginExecId() *string
```

- *Type:* *string

---

##### `EndExecId`<sup>Required</sup> <a name="EndExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.endExecId"></a>

```go
func EndExecId() *string
```

- *Type:* *string

---

##### `FindingFilter`<sup>Required</sup> <a name="FindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.findingFilter"></a>

```go
func FindingFilter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexHashFilter`<sup>Required</sup> <a name="IndexHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.indexHashFilter"></a>

```go
func IndexHashFilter() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `SearchPeriod`<sup>Required</sup> <a name="SearchPeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.searchPeriod"></a>

```go
func SearchPeriod() *string
```

- *Type:* *string

---

##### `SqlTuningAdvisorTaskId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.sqlTuningAdvisorTaskId"></a>

```go
func SqlTuningAdvisorTaskId() *string
```

- *Type:* *string

---

##### `StatsHashFilter`<sup>Required</sup> <a name="StatsHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.statsHashFilter"></a>

```go
func StatsHashFilter() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding"

&dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig {
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
	FindingFilter: *string,
	Id: *string,
	IndexHashFilter: *string,
	SearchPeriod: *string,
	StatsHashFilter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.sqlTuningAdvisorTaskId">SqlTuningAdvisorTaskId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#sql_tuning_advisor_task_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.beginExecId">BeginExecId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#begin_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.endExecId">EndExecId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#end_exec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.findingFilter">FindingFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#finding_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.indexHashFilter">IndexHashFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#index_hash_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.searchPeriod">SearchPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#search_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.statsHashFilter">StatsHashFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#stats_hash_filter}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#managed_database_id}.

---

##### `SqlTuningAdvisorTaskId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.sqlTuningAdvisorTaskId"></a>

```go
SqlTuningAdvisorTaskId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#sql_tuning_advisor_task_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#sql_tuning_advisor_task_id}.

---

##### `BeginExecId`<sup>Optional</sup> <a name="BeginExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.beginExecId"></a>

```go
BeginExecId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#begin_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#begin_exec_id}.

---

##### `EndExecId`<sup>Optional</sup> <a name="EndExecId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.endExecId"></a>

```go
EndExecId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#end_exec_id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#end_exec_id}.

---

##### `FindingFilter`<sup>Optional</sup> <a name="FindingFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.findingFilter"></a>

```go
FindingFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#finding_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#finding_filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#id DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexHashFilter`<sup>Optional</sup> <a name="IndexHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.indexHashFilter"></a>

```go
IndexHashFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#index_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#index_hash_filter}.

---

##### `SearchPeriod`<sup>Optional</sup> <a name="SearchPeriod" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.searchPeriod"></a>

```go
SearchPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#search_period DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#search_period}.

---

##### `StatsHashFilter`<sup>Optional</sup> <a name="StatsHashFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingConfig.property.statsHashFilter"></a>

```go
StatsHashFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_tuning_advisor_tasks_finding#stats_hash_filter DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding#stats_hash_filter}.

---

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding"

&dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding.NewDataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding"

dataocidatabasemanagementmanageddatabasesqltuningadvisortasksfinding.NewDataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.dbTimeBenefit">DbTimeBenefit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isAlternativePlanFindingPresent">IsAlternativePlanFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isErrorFindingPresent">IsErrorFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isIndexFindingPresent">IsIndexFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isMiscellaneousFindingPresent">IsMiscellaneousFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isRestructureSqlFindingPresent">IsRestructureSqlFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isSqlProfileFindingImplemented">IsSqlProfileFindingImplemented</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isSqlProfileFindingPresent">IsSqlProfileFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isStatsFindingPresent">IsStatsFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isTimeoutFindingPresent">IsTimeoutFindingPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.parsingSchema">ParsingSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.perExecutionPercentage">PerExecutionPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlKey">SqlKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlText">SqlText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskId">SqlTuningAdvisorTaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskObjectExecutionId">SqlTuningAdvisorTaskObjectExecutionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskObjectId">SqlTuningAdvisorTaskObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbTimeBenefit`<sup>Required</sup> <a name="DbTimeBenefit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.dbTimeBenefit"></a>

```go
func DbTimeBenefit() *f64
```

- *Type:* *f64

---

##### `IsAlternativePlanFindingPresent`<sup>Required</sup> <a name="IsAlternativePlanFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isAlternativePlanFindingPresent"></a>

```go
func IsAlternativePlanFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsErrorFindingPresent`<sup>Required</sup> <a name="IsErrorFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isErrorFindingPresent"></a>

```go
func IsErrorFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsIndexFindingPresent`<sup>Required</sup> <a name="IsIndexFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isIndexFindingPresent"></a>

```go
func IsIndexFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsMiscellaneousFindingPresent`<sup>Required</sup> <a name="IsMiscellaneousFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isMiscellaneousFindingPresent"></a>

```go
func IsMiscellaneousFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRestructureSqlFindingPresent`<sup>Required</sup> <a name="IsRestructureSqlFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isRestructureSqlFindingPresent"></a>

```go
func IsRestructureSqlFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSqlProfileFindingImplemented`<sup>Required</sup> <a name="IsSqlProfileFindingImplemented" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isSqlProfileFindingImplemented"></a>

```go
func IsSqlProfileFindingImplemented() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSqlProfileFindingPresent`<sup>Required</sup> <a name="IsSqlProfileFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isSqlProfileFindingPresent"></a>

```go
func IsSqlProfileFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsStatsFindingPresent`<sup>Required</sup> <a name="IsStatsFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isStatsFindingPresent"></a>

```go
func IsStatsFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsTimeoutFindingPresent`<sup>Required</sup> <a name="IsTimeoutFindingPresent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.isTimeoutFindingPresent"></a>

```go
func IsTimeoutFindingPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ParsingSchema`<sup>Required</sup> <a name="ParsingSchema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.parsingSchema"></a>

```go
func ParsingSchema() *string
```

- *Type:* *string

---

##### `PerExecutionPercentage`<sup>Required</sup> <a name="PerExecutionPercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.perExecutionPercentage"></a>

```go
func PerExecutionPercentage() *f64
```

- *Type:* *f64

---

##### `SqlKey`<sup>Required</sup> <a name="SqlKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlKey"></a>

```go
func SqlKey() *string
```

- *Type:* *string

---

##### `SqlText`<sup>Required</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlText"></a>

```go
func SqlText() *string
```

- *Type:* *string

---

##### `SqlTuningAdvisorTaskId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskId"></a>

```go
func SqlTuningAdvisorTaskId() *string
```

- *Type:* *string

---

##### `SqlTuningAdvisorTaskObjectExecutionId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskObjectExecutionId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskObjectExecutionId"></a>

```go
func SqlTuningAdvisorTaskObjectExecutionId() *string
```

- *Type:* *string

---

##### `SqlTuningAdvisorTaskObjectId`<sup>Required</sup> <a name="SqlTuningAdvisorTaskObjectId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.sqlTuningAdvisorTaskObjectId"></a>

```go
func SqlTuningAdvisorTaskObjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFinding.DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems">DataOciDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingItems</a>

---



