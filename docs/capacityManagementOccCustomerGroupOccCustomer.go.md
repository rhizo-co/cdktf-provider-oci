# `capacityManagementOccCustomerGroupOccCustomer` Submodule <a name="`capacityManagementOccCustomerGroupOccCustomer` Submodule" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CapacityManagementOccCustomerGroupOccCustomer <a name="CapacityManagementOccCustomerGroupOccCustomer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer oci_capacity_management_occ_customer_group_occ_customer}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroupocccustomer"

capacitymanagementocccustomergroupocccustomer.NewCapacityManagementOccCustomerGroupOccCustomer(scope Construct, id *string, config CapacityManagementOccCustomerGroupOccCustomerConfig) CapacityManagementOccCustomerGroupOccCustomer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig">CapacityManagementOccCustomerGroupOccCustomerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig">CapacityManagementOccCustomerGroupOccCustomerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.putTimeouts"></a>

```go
func PutTimeouts(value CapacityManagementOccCustomerGroupOccCustomerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts">CapacityManagementOccCustomerGroupOccCustomerTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetId"></a>

```go
func ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CapacityManagementOccCustomerGroupOccCustomer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroupocccustomer"

capacitymanagementocccustomergroupocccustomer.CapacityManagementOccCustomerGroupOccCustomer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroupocccustomer"

capacitymanagementocccustomergroupocccustomer.CapacityManagementOccCustomerGroupOccCustomer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroupocccustomer"

capacitymanagementocccustomergroupocccustomer.CapacityManagementOccCustomerGroupOccCustomer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroupocccustomer"

capacitymanagementocccustomergroupocccustomer.CapacityManagementOccCustomerGroupOccCustomer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CapacityManagementOccCustomerGroupOccCustomer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CapacityManagementOccCustomerGroupOccCustomer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CapacityManagementOccCustomerGroupOccCustomer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CapacityManagementOccCustomerGroupOccCustomer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference">CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.occCustomerGroupIdInput">OccCustomerGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.tenancyIdInput">TenancyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.tenancyId">TenancyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.timeouts"></a>

```go
func Timeouts() CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference">CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OccCustomerGroupIdInput`<sup>Optional</sup> <a name="OccCustomerGroupIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.occCustomerGroupIdInput"></a>

```go
func OccCustomerGroupIdInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.tenancyIdInput"></a>

```go
func TenancyIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.occCustomerGroupId"></a>

```go
func OccCustomerGroupId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.tenancyId"></a>

```go
func TenancyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CapacityManagementOccCustomerGroupOccCustomerConfig <a name="CapacityManagementOccCustomerGroupOccCustomerConfig" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroupocccustomer"

&capacitymanagementocccustomergroupocccustomer.CapacityManagementOccCustomerGroupOccCustomerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	OccCustomerGroupId: *string,
	TenancyId: *string,
	Description: *string,
	Id: *string,
	Status: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#display_name CapacityManagementOccCustomerGroupOccCustomer#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#occ_customer_group_id CapacityManagementOccCustomerGroupOccCustomer#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.tenancyId">TenancyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#tenancy_id CapacityManagementOccCustomerGroupOccCustomer#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#description CapacityManagementOccCustomerGroupOccCustomer#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#id CapacityManagementOccCustomerGroupOccCustomer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#status CapacityManagementOccCustomerGroupOccCustomer#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts">CapacityManagementOccCustomerGroupOccCustomerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#display_name CapacityManagementOccCustomerGroupOccCustomer#display_name}.

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.occCustomerGroupId"></a>

```go
OccCustomerGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#occ_customer_group_id CapacityManagementOccCustomerGroupOccCustomer#occ_customer_group_id}.

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.tenancyId"></a>

```go
TenancyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#tenancy_id CapacityManagementOccCustomerGroupOccCustomer#tenancy_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#description CapacityManagementOccCustomerGroupOccCustomer#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#id CapacityManagementOccCustomerGroupOccCustomer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#status CapacityManagementOccCustomerGroupOccCustomer#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerConfig.property.timeouts"></a>

```go
Timeouts CapacityManagementOccCustomerGroupOccCustomerTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts">CapacityManagementOccCustomerGroupOccCustomerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#timeouts CapacityManagementOccCustomerGroupOccCustomer#timeouts}

---

### CapacityManagementOccCustomerGroupOccCustomerTimeouts <a name="CapacityManagementOccCustomerGroupOccCustomerTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroupocccustomer"

&capacitymanagementocccustomergroupocccustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#create CapacityManagementOccCustomerGroupOccCustomer#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#delete CapacityManagementOccCustomerGroupOccCustomer#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#update CapacityManagementOccCustomerGroupOccCustomer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#create CapacityManagementOccCustomerGroupOccCustomer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#delete CapacityManagementOccCustomerGroupOccCustomer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group_occ_customer#update CapacityManagementOccCustomerGroupOccCustomer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference <a name="CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroupocccustomer"

capacitymanagementocccustomergroupocccustomer.NewCapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroupOccCustomer.CapacityManagementOccCustomerGroupOccCustomerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



