# `dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions oci_database_management_managed_database_optimizer_statistics_advisor_executions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetEndTimeLessThanOrEqualTo">ResetEndTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetStartTimeGreaterThanOrEqualTo">ResetStartTimeGreaterThanOrEqualTo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEndTimeLessThanOrEqualTo` <a name="ResetEndTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetEndTimeLessThanOrEqualTo"></a>

```go
func ResetEndTimeLessThanOrEqualTo()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetId"></a>

```go
func ResetId()
```

##### `ResetStartTimeGreaterThanOrEqualTo` <a name="ResetStartTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.resetStartTimeGreaterThanOrEqualTo"></a>

```go
func ResetStartTimeGreaterThanOrEqualTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.optimizerStatisticsAdvisorExecutionsCollection">OptimizerStatisticsAdvisorExecutionsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.endTimeLessThanOrEqualToInput">EndTimeLessThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.startTimeGreaterThanOrEqualToInput">StartTimeGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.endTimeLessThanOrEqualTo">EndTimeLessThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.startTimeGreaterThanOrEqualTo">StartTimeGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList</a>

---

##### `OptimizerStatisticsAdvisorExecutionsCollection`<sup>Required</sup> <a name="OptimizerStatisticsAdvisorExecutionsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.optimizerStatisticsAdvisorExecutionsCollection"></a>

```go
func OptimizerStatisticsAdvisorExecutionsCollection() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList</a>

---

##### `EndTimeLessThanOrEqualToInput`<sup>Optional</sup> <a name="EndTimeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.endTimeLessThanOrEqualToInput"></a>

```go
func EndTimeLessThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `StartTimeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="StartTimeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.startTimeGreaterThanOrEqualToInput"></a>

```go
func StartTimeGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `EndTimeLessThanOrEqualTo`<sup>Required</sup> <a name="EndTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.endTimeLessThanOrEqualTo"></a>

```go
func EndTimeLessThanOrEqualTo() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `StartTimeGreaterThanOrEqualTo`<sup>Required</sup> <a name="StartTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.startTimeGreaterThanOrEqualTo"></a>

```go
func StartTimeGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedDatabaseId: *string,
	EndTimeLessThanOrEqualTo: *string,
	Filter: interface{},
	Id: *string,
	StartTimeGreaterThanOrEqualTo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.endTimeLessThanOrEqualTo">EndTimeLessThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#end_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.startTimeGreaterThanOrEqualTo">StartTimeGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#start_time_greater_than_or_equal_to}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#managed_database_id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#managed_database_id}.

---

##### `EndTimeLessThanOrEqualTo`<sup>Optional</sup> <a name="EndTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.endTimeLessThanOrEqualTo"></a>

```go
EndTimeLessThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#end_time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#end_time_less_than_or_equal_to}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#filter DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#id DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StartTimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="StartTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsConfig.property.startTimeGreaterThanOrEqualTo"></a>

```go
StartTimeGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#start_time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#start_time_greater_than_or_equal_to}.

---

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#values DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#regex DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#name DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#values DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_optimizer_statistics_advisor_executions#regex DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions#regex}.

---

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection {

}
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems {

}
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase {

}
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport {

}
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules {

}
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings {

}
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails {

}
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas {

}
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations {

}
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample {

}
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines {

}
```


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

&dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbDeploymentType">DbDeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbSubType">DbSubType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbType">DbType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DbDeploymentType`<sup>Required</sup> <a name="DbDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbDeploymentType"></a>

```go
func DbDeploymentType() *string
```

- *Type:* *string

---

##### `DbSubType`<sup>Required</sup> <a name="DbSubType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbSubType"></a>

```go
func DbSubType() *string
```

- *Type:* *string

---

##### `DbType`<sup>Required</sup> <a name="DbType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbType"></a>

```go
func DbType() *string
```

- *Type:* *string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabase</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.database">Database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.executionName">ExecutionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.findings">Findings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.report">Report</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.taskName">TaskName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.database"></a>

```go
func Database() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsDatabaseList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `ExecutionName`<sup>Required</sup> <a name="ExecutionName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.executionName"></a>

```go
func ExecutionName() *string
```

- *Type:* *string

---

##### `Findings`<sup>Required</sup> <a name="Findings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.findings"></a>

```go
func Findings() *f64
```

- *Type:* *f64

---

##### `Report`<sup>Required</sup> <a name="Report" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.report"></a>

```go
func Report() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `TaskName`<sup>Required</sup> <a name="TaskName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.taskName"></a>

```go
func TaskName() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.rules"></a>

```go
func Rules() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList</a>

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReport</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.operations">Operations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.schemas">Schemas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.operations"></a>

```go
func Operations() *[]*string
```

- *Type:* *[]*string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.schemas"></a>

```go
func Schemas() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetails</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.objects">Objects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Objects`<sup>Required</sup> <a name="Objects" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.objects"></a>

```go
func Objects() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsSchemas</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.recommendations">Recommendations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.details"></a>

```go
func Details() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsDetailsList</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Recommendations`<sup>Required</sup> <a name="Recommendations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.recommendations"></a>

```go
func Recommendations() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindings</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLines</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.lines">Lines</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lines`<sup>Required</sup> <a name="Lines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.lines"></a>

```go
func Lines() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleLinesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExample</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.example">Example</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.rationales">Rationales</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Example`<sup>Required</sup> <a name="Example" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.example"></a>

```go
func Example() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsExampleList</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Rationales`<sup>Required</sup> <a name="Rationales" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.rationales"></a>

```go
func Rationales() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendations</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationalesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsRecommendationsRationales</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.findings">Findings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Findings`<sup>Required</sup> <a name="Findings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.findings"></a>

```go
func Findings() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesFindingsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsReportRules</a>

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions"

dataocidatabasemanagementmanageddatabaseoptimizerstatisticsadvisorexecutions.NewDataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutions.DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection">DataOciDatabaseManagementManagedDatabaseOptimizerStatisticsAdvisorExecutionsOptimizerStatisticsAdvisorExecutionsCollection</a>

---



