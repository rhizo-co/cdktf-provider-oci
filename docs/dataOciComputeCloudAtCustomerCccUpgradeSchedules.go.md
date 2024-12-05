# `dataOciComputeCloudAtCustomerCccUpgradeSchedules` Submodule <a name="`dataOciComputeCloudAtCustomerCccUpgradeSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeCloudAtCustomerCccUpgradeSchedules <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedules" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules oci_compute_cloud_at_customer_ccc_upgrade_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

dataocicomputecloudatcustomercccupgradeschedules.NewDataOciComputeCloudAtCustomerCccUpgradeSchedules(scope Construct, id *string, config DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig) DataOciComputeCloudAtCustomerCccUpgradeSchedules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig">DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig">DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCccUpgradeScheduleId">ResetCccUpgradeScheduleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCccUpgradeScheduleId` <a name="ResetCccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCccUpgradeScheduleId"></a>

```go
func ResetCccUpgradeScheduleId()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetDisplayNameContains"></a>

```go
func ResetDisplayNameContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccUpgradeSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

dataocicomputecloudatcustomercccupgradeschedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

dataocicomputecloudatcustomercccupgradeschedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

dataocicomputecloudatcustomercccupgradeschedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

dataocicomputecloudatcustomercccupgradeschedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccUpgradeSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccUpgradeSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciComputeCloudAtCustomerCccUpgradeSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccUpgradeSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleCollection">CccUpgradeScheduleCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleIdInput">CccUpgradeScheduleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleId">CccUpgradeScheduleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CccUpgradeScheduleCollection`<sup>Required</sup> <a name="CccUpgradeScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleCollection"></a>

```go
func CccUpgradeScheduleCollection() DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.filter"></a>

```go
func Filter() DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CccUpgradeScheduleIdInput`<sup>Optional</sup> <a name="CccUpgradeScheduleIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleIdInput"></a>

```go
func CccUpgradeScheduleIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameContainsInput"></a>

```go
func DisplayNameContainsInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CccUpgradeScheduleId`<sup>Required</sup> <a name="CccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.cccUpgradeScheduleId"></a>

```go
func CccUpgradeScheduleId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.displayNameContains"></a>

```go
func DisplayNameContains() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

&dataocicomputecloudatcustomercccupgradeschedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection {

}
```


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

&dataocicomputecloudatcustomercccupgradeschedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems {

}
```


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

&dataocicomputecloudatcustomercccupgradeschedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents {

}
```


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

&dataocicomputecloudatcustomercccupgradeschedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccessLevel: *string,
	CccUpgradeScheduleId: *string,
	CompartmentId: *string,
	CompartmentIdInSubtree: interface{},
	DisplayName: *string,
	DisplayNameContains: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#access_level DataOciComputeCloudAtCustomerCccUpgradeSchedules#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.cccUpgradeScheduleId">CccUpgradeScheduleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#ccc_upgrade_schedule_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#ccc_upgrade_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name_contains DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#id DataOciComputeCloudAtCustomerCccUpgradeSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#state DataOciComputeCloudAtCustomerCccUpgradeSchedules#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#access_level DataOciComputeCloudAtCustomerCccUpgradeSchedules#access_level}.

---

##### `CccUpgradeScheduleId`<sup>Optional</sup> <a name="CccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.cccUpgradeScheduleId"></a>

```go
CccUpgradeScheduleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#ccc_upgrade_schedule_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#ccc_upgrade_schedule_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccUpgradeSchedules#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.displayNameContains"></a>

```go
DisplayNameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#display_name_contains DataOciComputeCloudAtCustomerCccUpgradeSchedules#display_name_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#filter DataOciComputeCloudAtCustomerCccUpgradeSchedules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#id DataOciComputeCloudAtCustomerCccUpgradeSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#state DataOciComputeCloudAtCustomerCccUpgradeSchedules#state}.

---

### DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

&dataocicomputecloudatcustomercccupgradeschedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#name DataOciComputeCloudAtCustomerCccUpgradeSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#values DataOciComputeCloudAtCustomerCccUpgradeSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#regex DataOciComputeCloudAtCustomerCccUpgradeSchedules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#name DataOciComputeCloudAtCustomerCccUpgradeSchedules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#values DataOciComputeCloudAtCustomerCccUpgradeSchedules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedules#regex DataOciComputeCloudAtCustomerCccUpgradeSchedules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

dataocicomputecloudatcustomercccupgradeschedules.NewDataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.get"></a>

```go
func Get(index *f64) DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

dataocicomputecloudatcustomercccupgradeschedules.NewDataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.scheduleEventDuration">ScheduleEventDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.scheduleEventRecurrences">ScheduleEventRecurrences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScheduleEventDuration`<sup>Required</sup> <a name="ScheduleEventDuration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.scheduleEventDuration"></a>

```go
func ScheduleEventDuration() *string
```

- *Type:* *string

---

##### `ScheduleEventRecurrences`<sup>Required</sup> <a name="ScheduleEventRecurrences" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.scheduleEventRecurrences"></a>

```go
func ScheduleEventRecurrences() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEvents</a>

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

dataocicomputecloudatcustomercccupgradeschedules.NewDataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

dataocicomputecloudatcustomercccupgradeschedules.NewDataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.events">Events</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.infrastructureIds">InfrastructureIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Events`<sup>Required</sup> <a name="Events" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.events"></a>

```go
func Events() DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsEventsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InfrastructureIds`<sup>Required</sup> <a name="InfrastructureIds" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.infrastructureIds"></a>

```go
func InfrastructureIds() *[]*string
```

- *Type:* *[]*string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItems</a>

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

dataocicomputecloudatcustomercccupgradeschedules.NewDataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.get"></a>

```go
func Get(index *f64) DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

dataocicomputecloudatcustomercccupgradeschedules.NewDataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.items"></a>

```go
func Items() DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection">DataOciComputeCloudAtCustomerCccUpgradeSchedulesCccUpgradeScheduleCollection</a>

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

dataocicomputecloudatcustomercccupgradeschedules.NewDataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.get"></a>

```go
func Get(index *f64) DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedules"

dataocicomputecloudatcustomercccupgradeschedules.NewDataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedules.DataOciComputeCloudAtCustomerCccUpgradeSchedulesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



