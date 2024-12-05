# `dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines oci_database_management_managed_database_sql_plan_baselines}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

dataocidatabasemanagementmanageddatabasesqlplanbaselines.NewDataOciDatabaseManagementManagedDatabaseSqlPlanBaselines(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAccepted">ResetIsAccepted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAdaptive">ResetIsAdaptive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAutoPurged">ResetIsAutoPurged</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsFixed">ResetIsFixed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsNeverExecuted">ResetIsNeverExecuted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsReproduced">ResetIsReproduced</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetPlanName">ResetPlanName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlHandle">ResetSqlHandle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlText">ResetSqlText</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetId"></a>

```go
func ResetId()
```

##### `ResetIsAccepted` <a name="ResetIsAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAccepted"></a>

```go
func ResetIsAccepted()
```

##### `ResetIsAdaptive` <a name="ResetIsAdaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAdaptive"></a>

```go
func ResetIsAdaptive()
```

##### `ResetIsAutoPurged` <a name="ResetIsAutoPurged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsAutoPurged"></a>

```go
func ResetIsAutoPurged()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetIsFixed` <a name="ResetIsFixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsFixed"></a>

```go
func ResetIsFixed()
```

##### `ResetIsNeverExecuted` <a name="ResetIsNeverExecuted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsNeverExecuted"></a>

```go
func ResetIsNeverExecuted()
```

##### `ResetIsReproduced` <a name="ResetIsReproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetIsReproduced"></a>

```go
func ResetIsReproduced()
```

##### `ResetLimit` <a name="ResetLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOpcNamedCredentialId"></a>

```go
func ResetOpcNamedCredentialId()
```

##### `ResetOrigin` <a name="ResetOrigin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetOrigin"></a>

```go
func ResetOrigin()
```

##### `ResetPlanName` <a name="ResetPlanName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetPlanName"></a>

```go
func ResetPlanName()
```

##### `ResetSqlHandle` <a name="ResetSqlHandle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlHandle"></a>

```go
func ResetSqlHandle()
```

##### `ResetSqlText` <a name="ResetSqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.resetSqlText"></a>

```go
func ResetSqlText()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

dataocidatabasemanagementmanageddatabasesqlplanbaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

dataocidatabasemanagementmanageddatabasesqlplanbaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

dataocidatabasemanagementmanageddatabasesqlplanbaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

dataocidatabasemanagementmanageddatabasesqlplanbaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlPlanBaselineCollection">SqlPlanBaselineCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAcceptedInput">IsAcceptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptiveInput">IsAdaptiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurgedInput">IsAutoPurgedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixedInput">IsFixedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecutedInput">IsNeverExecutedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproducedInput">IsReproducedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.originInput">OriginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planNameInput">PlanNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandleInput">SqlHandleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlTextInput">SqlTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAccepted">IsAccepted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptive">IsAdaptive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurged">IsAutoPurged</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixed">IsFixed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecuted">IsNeverExecuted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproduced">IsReproduced</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planName">PlanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandle">SqlHandle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlText">SqlText</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList</a>

---

##### `SqlPlanBaselineCollection`<sup>Required</sup> <a name="SqlPlanBaselineCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlPlanBaselineCollection"></a>

```go
func SqlPlanBaselineCollection() DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAcceptedInput`<sup>Optional</sup> <a name="IsAcceptedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAcceptedInput"></a>

```go
func IsAcceptedInput() interface{}
```

- *Type:* interface{}

---

##### `IsAdaptiveInput`<sup>Optional</sup> <a name="IsAdaptiveInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptiveInput"></a>

```go
func IsAdaptiveInput() interface{}
```

- *Type:* interface{}

---

##### `IsAutoPurgedInput`<sup>Optional</sup> <a name="IsAutoPurgedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurgedInput"></a>

```go
func IsAutoPurgedInput() interface{}
```

- *Type:* interface{}

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsFixedInput`<sup>Optional</sup> <a name="IsFixedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixedInput"></a>

```go
func IsFixedInput() interface{}
```

- *Type:* interface{}

---

##### `IsNeverExecutedInput`<sup>Optional</sup> <a name="IsNeverExecutedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecutedInput"></a>

```go
func IsNeverExecutedInput() interface{}
```

- *Type:* interface{}

---

##### `IsReproducedInput`<sup>Optional</sup> <a name="IsReproducedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproducedInput"></a>

```go
func IsReproducedInput() interface{}
```

- *Type:* interface{}

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialIdInput"></a>

```go
func OpcNamedCredentialIdInput() *string
```

- *Type:* *string

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.originInput"></a>

```go
func OriginInput() *string
```

- *Type:* *string

---

##### `PlanNameInput`<sup>Optional</sup> <a name="PlanNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planNameInput"></a>

```go
func PlanNameInput() *string
```

- *Type:* *string

---

##### `SqlHandleInput`<sup>Optional</sup> <a name="SqlHandleInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandleInput"></a>

```go
func SqlHandleInput() *string
```

- *Type:* *string

---

##### `SqlTextInput`<sup>Optional</sup> <a name="SqlTextInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlTextInput"></a>

```go
func SqlTextInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAccepted`<sup>Required</sup> <a name="IsAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAccepted"></a>

```go
func IsAccepted() interface{}
```

- *Type:* interface{}

---

##### `IsAdaptive`<sup>Required</sup> <a name="IsAdaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAdaptive"></a>

```go
func IsAdaptive() interface{}
```

- *Type:* interface{}

---

##### `IsAutoPurged`<sup>Required</sup> <a name="IsAutoPurged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isAutoPurged"></a>

```go
func IsAutoPurged() interface{}
```

- *Type:* interface{}

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsFixed`<sup>Required</sup> <a name="IsFixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isFixed"></a>

```go
func IsFixed() interface{}
```

- *Type:* interface{}

---

##### `IsNeverExecuted`<sup>Required</sup> <a name="IsNeverExecuted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isNeverExecuted"></a>

```go
func IsNeverExecuted() interface{}
```

- *Type:* interface{}

---

##### `IsReproduced`<sup>Required</sup> <a name="IsReproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.isReproduced"></a>

```go
func IsReproduced() interface{}
```

- *Type:* interface{}

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.opcNamedCredentialId"></a>

```go
func OpcNamedCredentialId() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `PlanName`<sup>Required</sup> <a name="PlanName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.planName"></a>

```go
func PlanName() *string
```

- *Type:* *string

---

##### `SqlHandle`<sup>Required</sup> <a name="SqlHandle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlHandle"></a>

```go
func SqlHandle() *string
```

- *Type:* *string

---

##### `SqlText`<sup>Required</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.sqlText"></a>

```go
func SqlText() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

&dataocidatabasemanagementmanageddatabasesqlplanbaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedDatabaseId: *string,
	Filter: interface{},
	Id: *string,
	IsAccepted: interface{},
	IsAdaptive: interface{},
	IsAutoPurged: interface{},
	IsEnabled: interface{},
	IsFixed: interface{},
	IsNeverExecuted: interface{},
	IsReproduced: interface{},
	Limit: *f64,
	OpcNamedCredentialId: *string,
	Origin: *string,
	PlanName: *string,
	SqlHandle: *string,
	SqlText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAccepted">IsAccepted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_accepted DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_accepted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAdaptive">IsAdaptive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_adaptive DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_adaptive}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAutoPurged">IsAutoPurged</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_auto_purged DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_auto_purged}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_enabled DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isFixed">IsFixed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_fixed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_fixed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isNeverExecuted">IsNeverExecuted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_never_executed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_never_executed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isReproduced">IsReproduced</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_reproduced DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_reproduced}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.limit">Limit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#limit DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.origin">Origin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#origin DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#origin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.planName">PlanName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#plan_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlHandle">SqlHandle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_handle DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_handle}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlText">SqlText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_text DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_text}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#managed_database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#filter DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAccepted`<sup>Optional</sup> <a name="IsAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAccepted"></a>

```go
IsAccepted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_accepted DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_accepted}.

---

##### `IsAdaptive`<sup>Optional</sup> <a name="IsAdaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAdaptive"></a>

```go
IsAdaptive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_adaptive DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_adaptive}.

---

##### `IsAutoPurged`<sup>Optional</sup> <a name="IsAutoPurged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isAutoPurged"></a>

```go
IsAutoPurged interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_auto_purged DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_auto_purged}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_enabled DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_enabled}.

---

##### `IsFixed`<sup>Optional</sup> <a name="IsFixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isFixed"></a>

```go
IsFixed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_fixed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_fixed}.

---

##### `IsNeverExecuted`<sup>Optional</sup> <a name="IsNeverExecuted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isNeverExecuted"></a>

```go
IsNeverExecuted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_never_executed DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_never_executed}.

---

##### `IsReproduced`<sup>Optional</sup> <a name="IsReproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.isReproduced"></a>

```go
IsReproduced interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#is_reproduced DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#is_reproduced}.

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#limit DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#limit}.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.opcNamedCredentialId"></a>

```go
OpcNamedCredentialId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#opc_named_credential_id}.

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.origin"></a>

```go
Origin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#origin DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#origin}.

---

##### `PlanName`<sup>Optional</sup> <a name="PlanName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.planName"></a>

```go
PlanName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#plan_name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#plan_name}.

---

##### `SqlHandle`<sup>Optional</sup> <a name="SqlHandle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlHandle"></a>

```go
SqlHandle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_handle DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_handle}.

---

##### `SqlText`<sup>Optional</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesConfig.property.sqlText"></a>

```go
SqlText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#sql_text DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#sql_text}.

---

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

&dataocidatabasemanagementmanageddatabasesqlplanbaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#values DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#regex DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#name DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#values DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baselines#regex DataOciDatabaseManagementManagedDatabaseSqlPlanBaselines#regex}.

---

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

&dataocidatabasemanagementmanageddatabasesqlplanbaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection {

}
```


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

&dataocidatabasemanagementmanageddatabasesqlplanbaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

dataocidatabasemanagementmanageddatabasesqlplanbaselines.NewDataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

dataocidatabasemanagementmanageddatabasesqlplanbaselines.NewDataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

dataocidatabasemanagementmanageddatabasesqlplanbaselines.NewDataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

dataocidatabasemanagementmanageddatabasesqlplanbaselines.NewDataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.accepted">Accepted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.adaptive">Adaptive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.autoPurge">AutoPurge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.enabled">Enabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.executionPlan">ExecutionPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fixed">Fixed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.module">Module</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.planName">PlanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.reproduced">Reproduced</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlHandle">SqlHandle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlText">SqlText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastExecuted">TimeLastExecuted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastModified">TimeLastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Accepted`<sup>Required</sup> <a name="Accepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.accepted"></a>

```go
func Accepted() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Adaptive`<sup>Required</sup> <a name="Adaptive" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.adaptive"></a>

```go
func Adaptive() *string
```

- *Type:* *string

---

##### `AutoPurge`<sup>Required</sup> <a name="AutoPurge" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.autoPurge"></a>

```go
func AutoPurge() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.enabled"></a>

```go
func Enabled() *string
```

- *Type:* *string

---

##### `ExecutionPlan`<sup>Required</sup> <a name="ExecutionPlan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.executionPlan"></a>

```go
func ExecutionPlan() *string
```

- *Type:* *string

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.fixed"></a>

```go
func Fixed() *string
```

- *Type:* *string

---

##### `Module`<sup>Required</sup> <a name="Module" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.module"></a>

```go
func Module() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `PlanName`<sup>Required</sup> <a name="PlanName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.planName"></a>

```go
func PlanName() *string
```

- *Type:* *string

---

##### `Reproduced`<sup>Required</sup> <a name="Reproduced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.reproduced"></a>

```go
func Reproduced() *string
```

- *Type:* *string

---

##### `SqlHandle`<sup>Required</sup> <a name="SqlHandle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlHandle"></a>

```go
func SqlHandle() *string
```

- *Type:* *string

---

##### `SqlText`<sup>Required</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.sqlText"></a>

```go
func SqlText() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastExecuted`<sup>Required</sup> <a name="TimeLastExecuted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastExecuted"></a>

```go
func TimeLastExecuted() *string
```

- *Type:* *string

---

##### `TimeLastModified`<sup>Required</sup> <a name="TimeLastModified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.timeLastModified"></a>

```go
func TimeLastModified() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

dataocidatabasemanagementmanageddatabasesqlplanbaselines.NewDataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselines"

dataocidatabasemanagementmanageddatabasesqlplanbaselines.NewDataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselines.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselinesSqlPlanBaselineCollection</a>

---



