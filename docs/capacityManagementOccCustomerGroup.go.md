# `capacityManagementOccCustomerGroup` Submodule <a name="`capacityManagementOccCustomerGroup` Submodule" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CapacityManagementOccCustomerGroup <a name="CapacityManagementOccCustomerGroup" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group oci_capacity_management_occ_customer_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroup"

capacitymanagementocccustomergroup.NewCapacityManagementOccCustomerGroup(scope Construct, id *string, config CapacityManagementOccCustomerGroupConfig) CapacityManagementOccCustomerGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig">CapacityManagementOccCustomerGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig">CapacityManagementOccCustomerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putCustomersList">PutCustomersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetCustomersList">ResetCustomersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetLifecycleDetails">ResetLifecycleDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomersList` <a name="PutCustomersList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putCustomersList"></a>

```go
func PutCustomersList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putCustomersList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putTimeouts"></a>

```go
func PutTimeouts(value CapacityManagementOccCustomerGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts">CapacityManagementOccCustomerGroupTimeouts</a>

---

##### `ResetCustomersList` <a name="ResetCustomersList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetCustomersList"></a>

```go
func ResetCustomersList()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetLifecycleDetails` <a name="ResetLifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetLifecycleDetails"></a>

```go
func ResetLifecycleDetails()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CapacityManagementOccCustomerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroup"

capacitymanagementocccustomergroup.CapacityManagementOccCustomerGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroup"

capacitymanagementocccustomergroup.CapacityManagementOccCustomerGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroup"

capacitymanagementocccustomergroup.CapacityManagementOccCustomerGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroup"

capacitymanagementocccustomergroup.CapacityManagementOccCustomerGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CapacityManagementOccCustomerGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CapacityManagementOccCustomerGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CapacityManagementOccCustomerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CapacityManagementOccCustomerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.customersList">CustomersList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList">CapacityManagementOccCustomerGroupCustomersListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference">CapacityManagementOccCustomerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.customersListInput">CustomersListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycleDetailsInput">LifecycleDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomersList`<sup>Required</sup> <a name="CustomersList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.customersList"></a>

```go
func CustomersList() CapacityManagementOccCustomerGroupCustomersListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList">CapacityManagementOccCustomerGroupCustomersListStructList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeouts"></a>

```go
func Timeouts() CapacityManagementOccCustomerGroupTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference">CapacityManagementOccCustomerGroupTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CustomersListInput`<sup>Optional</sup> <a name="CustomersListInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.customersListInput"></a>

```go
func CustomersListInput() interface{}
```

- *Type:* interface{}

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LifecycleDetailsInput`<sup>Optional</sup> <a name="LifecycleDetailsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycleDetailsInput"></a>

```go
func LifecycleDetailsInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CapacityManagementOccCustomerGroupConfig <a name="CapacityManagementOccCustomerGroupConfig" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroup"

&capacitymanagementocccustomergroup.CapacityManagementOccCustomerGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	CustomersList: interface{},
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	LifecycleDetails: *string,
	Status: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#compartment_id CapacityManagementOccCustomerGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#display_name CapacityManagementOccCustomerGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.customersList">CustomersList</a></code> | <code>interface{}</code> | customers_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#defined_tags CapacityManagementOccCustomerGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#description CapacityManagementOccCustomerGroup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#freeform_tags CapacityManagementOccCustomerGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#id CapacityManagementOccCustomerGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#lifecycle_details CapacityManagementOccCustomerGroup#lifecycle_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#status CapacityManagementOccCustomerGroup#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts">CapacityManagementOccCustomerGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#compartment_id CapacityManagementOccCustomerGroup#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#display_name CapacityManagementOccCustomerGroup#display_name}.

---

##### `CustomersList`<sup>Optional</sup> <a name="CustomersList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.customersList"></a>

```go
CustomersList interface{}
```

- *Type:* interface{}

customers_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#customers_list CapacityManagementOccCustomerGroup#customers_list}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#defined_tags CapacityManagementOccCustomerGroup#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#description CapacityManagementOccCustomerGroup#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#freeform_tags CapacityManagementOccCustomerGroup#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#id CapacityManagementOccCustomerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LifecycleDetails`<sup>Optional</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.lifecycleDetails"></a>

```go
LifecycleDetails *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#lifecycle_details CapacityManagementOccCustomerGroup#lifecycle_details}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#status CapacityManagementOccCustomerGroup#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupConfig.property.timeouts"></a>

```go
Timeouts CapacityManagementOccCustomerGroupTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts">CapacityManagementOccCustomerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#timeouts CapacityManagementOccCustomerGroup#timeouts}

---

### CapacityManagementOccCustomerGroupCustomersListStruct <a name="CapacityManagementOccCustomerGroupCustomersListStruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroup"

&capacitymanagementocccustomergroup.CapacityManagementOccCustomerGroupCustomersListStruct {
	DisplayName: *string,
	TenancyId: *string,
	Description: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#display_name CapacityManagementOccCustomerGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.tenancyId">TenancyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#tenancy_id CapacityManagementOccCustomerGroup#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#description CapacityManagementOccCustomerGroup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#status CapacityManagementOccCustomerGroup#status}. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#display_name CapacityManagementOccCustomerGroup#display_name}.

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.tenancyId"></a>

```go
TenancyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#tenancy_id CapacityManagementOccCustomerGroup#tenancy_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#description CapacityManagementOccCustomerGroup#description}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStruct.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#status CapacityManagementOccCustomerGroup#status}.

---

### CapacityManagementOccCustomerGroupTimeouts <a name="CapacityManagementOccCustomerGroupTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroup"

&capacitymanagementocccustomergroup.CapacityManagementOccCustomerGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#create CapacityManagementOccCustomerGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#delete CapacityManagementOccCustomerGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#update CapacityManagementOccCustomerGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#create CapacityManagementOccCustomerGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#delete CapacityManagementOccCustomerGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_customer_group#update CapacityManagementOccCustomerGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CapacityManagementOccCustomerGroupCustomersListStructList <a name="CapacityManagementOccCustomerGroupCustomersListStructList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroup"

capacitymanagementocccustomergroup.NewCapacityManagementOccCustomerGroupCustomersListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CapacityManagementOccCustomerGroupCustomersListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.get"></a>

```go
func Get(index *f64) CapacityManagementOccCustomerGroupCustomersListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CapacityManagementOccCustomerGroupCustomersListStructOutputReference <a name="CapacityManagementOccCustomerGroupCustomersListStructOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroup"

capacitymanagementocccustomergroup.NewCapacityManagementOccCustomerGroupCustomersListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CapacityManagementOccCustomerGroupCustomersListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.occCustomerGroupId">OccCustomerGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.tenancyIdInput">TenancyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.tenancyId">TenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OccCustomerGroupId`<sup>Required</sup> <a name="OccCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.occCustomerGroupId"></a>

```go
func OccCustomerGroupId() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.tenancyIdInput"></a>

```go
func TenancyIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.tenancyId"></a>

```go
func TenancyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupCustomersListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CapacityManagementOccCustomerGroupTimeoutsOutputReference <a name="CapacityManagementOccCustomerGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/capacitymanagementocccustomergroup"

capacitymanagementocccustomergroup.NewCapacityManagementOccCustomerGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CapacityManagementOccCustomerGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCustomerGroup.CapacityManagementOccCustomerGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



