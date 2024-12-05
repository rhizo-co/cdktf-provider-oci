# `opsiOperationsInsightsWarehouseRotateWarehouseWallet` Submodule <a name="`opsiOperationsInsightsWarehouseRotateWarehouseWallet` Submodule" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiOperationsInsightsWarehouseRotateWarehouseWallet <a name="OpsiOperationsInsightsWarehouseRotateWarehouseWallet" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet oci_opsi_operations_insights_warehouse_rotate_warehouse_wallet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightswarehouserotatewarehousewallet"

opsioperationsinsightswarehouserotatewarehousewallet.NewOpsiOperationsInsightsWarehouseRotateWarehouseWallet(scope Construct, id *string, config OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig) OpsiOperationsInsightsWarehouseRotateWarehouseWallet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig">OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig">OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.putTimeouts"></a>

```go
func PutTimeouts(value OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiOperationsInsightsWarehouseRotateWarehouseWallet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightswarehouserotatewarehousewallet"

opsioperationsinsightswarehouserotatewarehousewallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightswarehouserotatewarehousewallet"

opsioperationsinsightswarehouserotatewarehousewallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightswarehouserotatewarehousewallet"

opsioperationsinsightswarehouserotatewarehousewallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightswarehouserotatewarehousewallet"

opsioperationsinsightswarehouserotatewarehousewallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpsiOperationsInsightsWarehouseRotateWarehouseWallet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpsiOperationsInsightsWarehouseRotateWarehouseWallet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpsiOperationsInsightsWarehouseRotateWarehouseWallet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpsiOperationsInsightsWarehouseRotateWarehouseWallet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference">OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.operationsInsightsWarehouseIdInput">OperationsInsightsWarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.operationsInsightsWarehouseId">OperationsInsightsWarehouseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.timeouts"></a>

```go
func Timeouts() OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference">OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OperationsInsightsWarehouseIdInput`<sup>Optional</sup> <a name="OperationsInsightsWarehouseIdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.operationsInsightsWarehouseIdInput"></a>

```go
func OperationsInsightsWarehouseIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OperationsInsightsWarehouseId`<sup>Required</sup> <a name="OperationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.operationsInsightsWarehouseId"></a>

```go
func OperationsInsightsWarehouseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWallet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig <a name="OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightswarehouserotatewarehousewallet"

&opsioperationsinsightswarehouserotatewarehousewallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OperationsInsightsWarehouseId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.operationsInsightsWarehouseId">OperationsInsightsWarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseRotateWarehouseWallet#operations_insights_warehouse_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#id OpsiOperationsInsightsWarehouseRotateWarehouseWallet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OperationsInsightsWarehouseId`<sup>Required</sup> <a name="OperationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.operationsInsightsWarehouseId"></a>

```go
OperationsInsightsWarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseRotateWarehouseWallet#operations_insights_warehouse_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#id OpsiOperationsInsightsWarehouseRotateWarehouseWallet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletConfig.property.timeouts"></a>

```go
Timeouts OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#timeouts OpsiOperationsInsightsWarehouseRotateWarehouseWallet#timeouts}

---

### OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts <a name="OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightswarehouserotatewarehousewallet"

&opsioperationsinsightswarehouserotatewarehousewallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#create OpsiOperationsInsightsWarehouseRotateWarehouseWallet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#delete OpsiOperationsInsightsWarehouseRotateWarehouseWallet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#update OpsiOperationsInsightsWarehouseRotateWarehouseWallet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#create OpsiOperationsInsightsWarehouseRotateWarehouseWallet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#delete OpsiOperationsInsightsWarehouseRotateWarehouseWallet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_rotate_warehouse_wallet#update OpsiOperationsInsightsWarehouseRotateWarehouseWallet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference <a name="OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsioperationsinsightswarehouserotatewarehousewallet"

opsioperationsinsightswarehouserotatewarehousewallet.NewOpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseRotateWarehouseWallet.OpsiOperationsInsightsWarehouseRotateWarehouseWalletTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



