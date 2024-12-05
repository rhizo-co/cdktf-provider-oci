# `dataOciComputeCloudAtCustomerCccUpgradeSchedule` Submodule <a name="`dataOciComputeCloudAtCustomerCccUpgradeSchedule` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeCloudAtCustomerCccUpgradeSchedule <a name="DataOciComputeCloudAtCustomerCccUpgradeSchedule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedule oci_compute_cloud_at_customer_ccc_upgrade_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedule"

dataocicomputecloudatcustomercccupgradeschedule.NewDataOciComputeCloudAtCustomerCccUpgradeSchedule(scope Construct, id *string, config DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig) DataOciComputeCloudAtCustomerCccUpgradeSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig">DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig">DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccUpgradeSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedule"

dataocicomputecloudatcustomercccupgradeschedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedule"

dataocicomputecloudatcustomercccupgradeschedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedule"

dataocicomputecloudatcustomercccupgradeschedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedule"

dataocicomputecloudatcustomercccupgradeschedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccUpgradeSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccUpgradeSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciComputeCloudAtCustomerCccUpgradeSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccUpgradeSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.events">Events</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList">DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.infrastructureIds">InfrastructureIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.cccUpgradeScheduleIdInput">CccUpgradeScheduleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.cccUpgradeScheduleId">CccUpgradeScheduleId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Events`<sup>Required</sup> <a name="Events" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.events"></a>

```go
func Events() DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList">DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InfrastructureIds`<sup>Required</sup> <a name="InfrastructureIds" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.infrastructureIds"></a>

```go
func InfrastructureIds() *[]*string
```

- *Type:* *[]*string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CccUpgradeScheduleIdInput`<sup>Optional</sup> <a name="CccUpgradeScheduleIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.cccUpgradeScheduleIdInput"></a>

```go
func CccUpgradeScheduleIdInput() *string
```

- *Type:* *string

---

##### `CccUpgradeScheduleId`<sup>Required</sup> <a name="CccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.cccUpgradeScheduleId"></a>

```go
func CccUpgradeScheduleId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig <a name="DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedule"

&dataocicomputecloudatcustomercccupgradeschedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CccUpgradeScheduleId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.cccUpgradeScheduleId">CccUpgradeScheduleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedule#ccc_upgrade_schedule_id DataOciComputeCloudAtCustomerCccUpgradeSchedule#ccc_upgrade_schedule_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CccUpgradeScheduleId`<sup>Required</sup> <a name="CccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleConfig.property.cccUpgradeScheduleId"></a>

```go
CccUpgradeScheduleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_upgrade_schedule#ccc_upgrade_schedule_id DataOciComputeCloudAtCustomerCccUpgradeSchedule#ccc_upgrade_schedule_id}.

---

### DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents <a name="DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedule"

&dataocicomputecloudatcustomercccupgradeschedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList <a name="DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedule"

dataocicomputecloudatcustomercccupgradeschedule.NewDataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.get"></a>

```go
func Get(index *f64) DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference <a name="DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputecloudatcustomercccupgradeschedule"

dataocicomputecloudatcustomercccupgradeschedule.NewDataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDuration">ScheduleEventDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrences">ScheduleEventRecurrences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents">DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScheduleEventDuration`<sup>Required</sup> <a name="ScheduleEventDuration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDuration"></a>

```go
func ScheduleEventDuration() *string
```

- *Type:* *string

---

##### `ScheduleEventRecurrences`<sup>Required</sup> <a name="ScheduleEventRecurrences" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrences"></a>

```go
func ScheduleEventRecurrences() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccUpgradeSchedule.DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents">DataOciComputeCloudAtCustomerCccUpgradeScheduleEvents</a>

---



