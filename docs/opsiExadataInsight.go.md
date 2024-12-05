# `opsiExadataInsight` Submodule <a name="`opsiExadataInsight` Submodule" id="rhizo-co-terraform-provider-oci.opsiExadataInsight"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiExadataInsight <a name="OpsiExadataInsight" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight oci_opsi_exadata_insight}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.NewOpsiExadataInsight(scope Construct, id *string, config OpsiExadataInsightConfig) OpsiExadataInsight
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig">OpsiExadataInsightConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig">OpsiExadataInsightConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.putMemberVmClusterDetails">PutMemberVmClusterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetEnterpriseManagerBridgeId">ResetEnterpriseManagerBridgeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetEnterpriseManagerEntityIdentifier">ResetEnterpriseManagerEntityIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetEnterpriseManagerIdentifier">ResetEnterpriseManagerIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetExadataInfraId">ResetExadataInfraId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetIsAutoSyncEnabled">ResetIsAutoSyncEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetMemberVmClusterDetails">ResetMemberVmClusterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMemberVmClusterDetails` <a name="PutMemberVmClusterDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.putMemberVmClusterDetails"></a>

```go
func PutMemberVmClusterDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.putMemberVmClusterDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.putTimeouts"></a>

```go
func PutTimeouts(value OpsiExadataInsightTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts">OpsiExadataInsightTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetEnterpriseManagerBridgeId` <a name="ResetEnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetEnterpriseManagerBridgeId"></a>

```go
func ResetEnterpriseManagerBridgeId()
```

##### `ResetEnterpriseManagerEntityIdentifier` <a name="ResetEnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetEnterpriseManagerEntityIdentifier"></a>

```go
func ResetEnterpriseManagerEntityIdentifier()
```

##### `ResetEnterpriseManagerIdentifier` <a name="ResetEnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetEnterpriseManagerIdentifier"></a>

```go
func ResetEnterpriseManagerIdentifier()
```

##### `ResetExadataInfraId` <a name="ResetExadataInfraId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetExadataInfraId"></a>

```go
func ResetExadataInfraId()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetId"></a>

```go
func ResetId()
```

##### `ResetIsAutoSyncEnabled` <a name="ResetIsAutoSyncEnabled" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetIsAutoSyncEnabled"></a>

```go
func ResetIsAutoSyncEnabled()
```

##### `ResetMemberVmClusterDetails` <a name="ResetMemberVmClusterDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetMemberVmClusterDetails"></a>

```go
func ResetMemberVmClusterDetails()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiExadataInsight resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.OpsiExadataInsight_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.OpsiExadataInsight_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.OpsiExadataInsight_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.OpsiExadataInsight_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpsiExadataInsight resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpsiExadataInsight to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpsiExadataInsight that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpsiExadataInsight to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityDisplayName">EnterpriseManagerEntityDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityName">EnterpriseManagerEntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityType">EnterpriseManagerEntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataDisplayName">ExadataDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataInfraResourceType">ExadataInfraResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataName">ExadataName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataRackType">ExadataRackType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataShape">ExadataShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataType">ExadataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.isVirtualizedExadata">IsVirtualizedExadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.memberVmClusterDetails">MemberVmClusterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList">OpsiExadataInsightMemberVmClusterDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference">OpsiExadataInsightTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerBridgeIdInput">EnterpriseManagerBridgeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityIdentifierInput">EnterpriseManagerEntityIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerIdentifierInput">EnterpriseManagerIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.entitySourceInput">EntitySourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataInfraIdInput">ExadataInfraIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.isAutoSyncEnabledInput">IsAutoSyncEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.memberVmClusterDetailsInput">MemberVmClusterDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityIdentifier">EnterpriseManagerEntityIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerIdentifier">EnterpriseManagerIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.entitySource">EntitySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataInfraId">ExadataInfraId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.isAutoSyncEnabled">IsAutoSyncEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnterpriseManagerEntityDisplayName`<sup>Required</sup> <a name="EnterpriseManagerEntityDisplayName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityDisplayName"></a>

```go
func EnterpriseManagerEntityDisplayName() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityName`<sup>Required</sup> <a name="EnterpriseManagerEntityName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityName"></a>

```go
func EnterpriseManagerEntityName() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityType`<sup>Required</sup> <a name="EnterpriseManagerEntityType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityType"></a>

```go
func EnterpriseManagerEntityType() *string
```

- *Type:* *string

---

##### `ExadataDisplayName`<sup>Required</sup> <a name="ExadataDisplayName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataDisplayName"></a>

```go
func ExadataDisplayName() *string
```

- *Type:* *string

---

##### `ExadataInfraResourceType`<sup>Required</sup> <a name="ExadataInfraResourceType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataInfraResourceType"></a>

```go
func ExadataInfraResourceType() *string
```

- *Type:* *string

---

##### `ExadataName`<sup>Required</sup> <a name="ExadataName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataName"></a>

```go
func ExadataName() *string
```

- *Type:* *string

---

##### `ExadataRackType`<sup>Required</sup> <a name="ExadataRackType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataRackType"></a>

```go
func ExadataRackType() *string
```

- *Type:* *string

---

##### `ExadataShape`<sup>Required</sup> <a name="ExadataShape" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataShape"></a>

```go
func ExadataShape() *string
```

- *Type:* *string

---

##### `ExadataType`<sup>Required</sup> <a name="ExadataType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataType"></a>

```go
func ExadataType() *string
```

- *Type:* *string

---

##### `IsVirtualizedExadata`<sup>Required</sup> <a name="IsVirtualizedExadata" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.isVirtualizedExadata"></a>

```go
func IsVirtualizedExadata() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MemberVmClusterDetails`<sup>Required</sup> <a name="MemberVmClusterDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.memberVmClusterDetails"></a>

```go
func MemberVmClusterDetails() OpsiExadataInsightMemberVmClusterDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList">OpsiExadataInsightMemberVmClusterDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeouts"></a>

```go
func Timeouts() OpsiExadataInsightTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference">OpsiExadataInsightTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnterpriseManagerBridgeIdInput`<sup>Optional</sup> <a name="EnterpriseManagerBridgeIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerBridgeIdInput"></a>

```go
func EnterpriseManagerBridgeIdInput() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityIdentifierInput`<sup>Optional</sup> <a name="EnterpriseManagerEntityIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityIdentifierInput"></a>

```go
func EnterpriseManagerEntityIdentifierInput() *string
```

- *Type:* *string

---

##### `EnterpriseManagerIdentifierInput`<sup>Optional</sup> <a name="EnterpriseManagerIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerIdentifierInput"></a>

```go
func EnterpriseManagerIdentifierInput() *string
```

- *Type:* *string

---

##### `EntitySourceInput`<sup>Optional</sup> <a name="EntitySourceInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.entitySourceInput"></a>

```go
func EntitySourceInput() *string
```

- *Type:* *string

---

##### `ExadataInfraIdInput`<sup>Optional</sup> <a name="ExadataInfraIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataInfraIdInput"></a>

```go
func ExadataInfraIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAutoSyncEnabledInput`<sup>Optional</sup> <a name="IsAutoSyncEnabledInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.isAutoSyncEnabledInput"></a>

```go
func IsAutoSyncEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MemberVmClusterDetailsInput`<sup>Optional</sup> <a name="MemberVmClusterDetailsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.memberVmClusterDetailsInput"></a>

```go
func MemberVmClusterDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnterpriseManagerBridgeId`<sup>Required</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerBridgeId"></a>

```go
func EnterpriseManagerBridgeId() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityIdentifier`<sup>Required</sup> <a name="EnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerEntityIdentifier"></a>

```go
func EnterpriseManagerEntityIdentifier() *string
```

- *Type:* *string

---

##### `EnterpriseManagerIdentifier`<sup>Required</sup> <a name="EnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.enterpriseManagerIdentifier"></a>

```go
func EnterpriseManagerIdentifier() *string
```

- *Type:* *string

---

##### `EntitySource`<sup>Required</sup> <a name="EntitySource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.entitySource"></a>

```go
func EntitySource() *string
```

- *Type:* *string

---

##### `ExadataInfraId`<sup>Required</sup> <a name="ExadataInfraId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.exadataInfraId"></a>

```go
func ExadataInfraId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAutoSyncEnabled`<sup>Required</sup> <a name="IsAutoSyncEnabled" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.isAutoSyncEnabled"></a>

```go
func IsAutoSyncEnabled() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsight.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiExadataInsightConfig <a name="OpsiExadataInsightConfig" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

&opsiexadatainsight.OpsiExadataInsightConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	EntitySource: *string,
	DefinedTags: *map[string]*string,
	EnterpriseManagerBridgeId: *string,
	EnterpriseManagerEntityIdentifier: *string,
	EnterpriseManagerIdentifier: *string,
	ExadataInfraId: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsAutoSyncEnabled: interface{},
	MemberVmClusterDetails: interface{},
	Status: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiExadataInsight.OpsiExadataInsightTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.entitySource">EntitySource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#entity_source OpsiExadataInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#defined_tags OpsiExadataInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#enterprise_manager_bridge_id OpsiExadataInsight#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.enterpriseManagerEntityIdentifier">EnterpriseManagerEntityIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#enterprise_manager_entity_identifier OpsiExadataInsight#enterprise_manager_entity_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.enterpriseManagerIdentifier">EnterpriseManagerIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#enterprise_manager_identifier OpsiExadataInsight#enterprise_manager_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.exadataInfraId">ExadataInfraId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#exadata_infra_id OpsiExadataInsight#exadata_infra_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#freeform_tags OpsiExadataInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#id OpsiExadataInsight#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.isAutoSyncEnabled">IsAutoSyncEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#is_auto_sync_enabled OpsiExadataInsight#is_auto_sync_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.memberVmClusterDetails">MemberVmClusterDetails</a></code> | <code>interface{}</code> | member_vm_cluster_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#status OpsiExadataInsight#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts">OpsiExadataInsightTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}.

---

##### `EntitySource`<sup>Required</sup> <a name="EntitySource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.entitySource"></a>

```go
EntitySource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#entity_source OpsiExadataInsight#entity_source}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#defined_tags OpsiExadataInsight#defined_tags}.

---

##### `EnterpriseManagerBridgeId`<sup>Optional</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.enterpriseManagerBridgeId"></a>

```go
EnterpriseManagerBridgeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#enterprise_manager_bridge_id OpsiExadataInsight#enterprise_manager_bridge_id}.

---

##### `EnterpriseManagerEntityIdentifier`<sup>Optional</sup> <a name="EnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.enterpriseManagerEntityIdentifier"></a>

```go
EnterpriseManagerEntityIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#enterprise_manager_entity_identifier OpsiExadataInsight#enterprise_manager_entity_identifier}.

---

##### `EnterpriseManagerIdentifier`<sup>Optional</sup> <a name="EnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.enterpriseManagerIdentifier"></a>

```go
EnterpriseManagerIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#enterprise_manager_identifier OpsiExadataInsight#enterprise_manager_identifier}.

---

##### `ExadataInfraId`<sup>Optional</sup> <a name="ExadataInfraId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.exadataInfraId"></a>

```go
ExadataInfraId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#exadata_infra_id OpsiExadataInsight#exadata_infra_id}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#freeform_tags OpsiExadataInsight#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#id OpsiExadataInsight#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAutoSyncEnabled`<sup>Optional</sup> <a name="IsAutoSyncEnabled" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.isAutoSyncEnabled"></a>

```go
IsAutoSyncEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#is_auto_sync_enabled OpsiExadataInsight#is_auto_sync_enabled}.

---

##### `MemberVmClusterDetails`<sup>Optional</sup> <a name="MemberVmClusterDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.memberVmClusterDetails"></a>

```go
MemberVmClusterDetails interface{}
```

- *Type:* interface{}

member_vm_cluster_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#member_vm_cluster_details OpsiExadataInsight#member_vm_cluster_details}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#status OpsiExadataInsight#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightConfig.property.timeouts"></a>

```go
Timeouts OpsiExadataInsightTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts">OpsiExadataInsightTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#timeouts OpsiExadataInsight#timeouts}

---

### OpsiExadataInsightMemberVmClusterDetails <a name="OpsiExadataInsightMemberVmClusterDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

&opsiexadatainsight.OpsiExadataInsightMemberVmClusterDetails {
	CompartmentId: *string,
	DbmPrivateEndpointId: *string,
	MemberDatabaseDetails: interface{},
	OpsiPrivateEndpointId: *string,
	VmclusterId: *string,
	VmClusterType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.dbmPrivateEndpointId">DbmPrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#dbm_private_endpoint_id OpsiExadataInsight#dbm_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.memberDatabaseDetails">MemberDatabaseDetails</a></code> | <code>interface{}</code> | member_database_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#opsi_private_endpoint_id OpsiExadataInsight#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.vmclusterId">VmclusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#vmcluster_id OpsiExadataInsight#vmcluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.vmClusterType">VmClusterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#vm_cluster_type OpsiExadataInsight#vm_cluster_type}. |

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}.

---

##### `DbmPrivateEndpointId`<sup>Optional</sup> <a name="DbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.dbmPrivateEndpointId"></a>

```go
DbmPrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#dbm_private_endpoint_id OpsiExadataInsight#dbm_private_endpoint_id}.

---

##### `MemberDatabaseDetails`<sup>Optional</sup> <a name="MemberDatabaseDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.memberDatabaseDetails"></a>

```go
MemberDatabaseDetails interface{}
```

- *Type:* interface{}

member_database_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#member_database_details OpsiExadataInsight#member_database_details}

---

##### `OpsiPrivateEndpointId`<sup>Optional</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.opsiPrivateEndpointId"></a>

```go
OpsiPrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#opsi_private_endpoint_id OpsiExadataInsight#opsi_private_endpoint_id}.

---

##### `VmclusterId`<sup>Optional</sup> <a name="VmclusterId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.vmclusterId"></a>

```go
VmclusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#vmcluster_id OpsiExadataInsight#vmcluster_id}.

---

##### `VmClusterType`<sup>Optional</sup> <a name="VmClusterType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetails.property.vmClusterType"></a>

```go
VmClusterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#vm_cluster_type OpsiExadataInsight#vm_cluster_type}.

---

### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

&opsiexadatainsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails {
	CompartmentId: *string,
	ConnectionCredentialDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails,
	ConnectionDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails,
	CredentialDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails,
	DatabaseId: *string,
	DatabaseResourceType: *string,
	DbmPrivateEndpointId: *string,
	DefinedTags: *map[string]*string,
	DeploymentType: *string,
	EntitySource: *string,
	FreeformTags: *map[string]*string,
	ManagementAgentId: *string,
	OpsiPrivateEndpointId: *string,
	ServiceName: *string,
	SystemTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.connectionCredentialDetails">ConnectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a></code> | connection_credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.connectionDetails">ConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a></code> | connection_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.credentialDetails">CredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a></code> | credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#database_id OpsiExadataInsight#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.databaseResourceType">DatabaseResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#database_resource_type OpsiExadataInsight#database_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.dbmPrivateEndpointId">DbmPrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#dbm_private_endpoint_id OpsiExadataInsight#dbm_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#defined_tags OpsiExadataInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#deployment_type OpsiExadataInsight#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.entitySource">EntitySource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#entity_source OpsiExadataInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#freeform_tags OpsiExadataInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#management_agent_id OpsiExadataInsight#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#opsi_private_endpoint_id OpsiExadataInsight#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#service_name OpsiExadataInsight#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.systemTags">SystemTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#system_tags OpsiExadataInsight#system_tags}. |

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}.

---

##### `ConnectionCredentialDetails`<sup>Optional</sup> <a name="ConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.connectionCredentialDetails"></a>

```go
ConnectionCredentialDetails OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a>

connection_credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#connection_credential_details OpsiExadataInsight#connection_credential_details}

---

##### `ConnectionDetails`<sup>Optional</sup> <a name="ConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.connectionDetails"></a>

```go
ConnectionDetails OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a>

connection_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#connection_details OpsiExadataInsight#connection_details}

---

##### `CredentialDetails`<sup>Optional</sup> <a name="CredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.credentialDetails"></a>

```go
CredentialDetails OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a>

credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_details OpsiExadataInsight#credential_details}

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#database_id OpsiExadataInsight#database_id}.

---

##### `DatabaseResourceType`<sup>Optional</sup> <a name="DatabaseResourceType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.databaseResourceType"></a>

```go
DatabaseResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#database_resource_type OpsiExadataInsight#database_resource_type}.

---

##### `DbmPrivateEndpointId`<sup>Optional</sup> <a name="DbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.dbmPrivateEndpointId"></a>

```go
DbmPrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#dbm_private_endpoint_id OpsiExadataInsight#dbm_private_endpoint_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#defined_tags OpsiExadataInsight#defined_tags}.

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#deployment_type OpsiExadataInsight#deployment_type}.

---

##### `EntitySource`<sup>Optional</sup> <a name="EntitySource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.entitySource"></a>

```go
EntitySource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#entity_source OpsiExadataInsight#entity_source}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#freeform_tags OpsiExadataInsight#freeform_tags}.

---

##### `ManagementAgentId`<sup>Optional</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.managementAgentId"></a>

```go
ManagementAgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#management_agent_id OpsiExadataInsight#management_agent_id}.

---

##### `OpsiPrivateEndpointId`<sup>Optional</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.opsiPrivateEndpointId"></a>

```go
OpsiPrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#opsi_private_endpoint_id OpsiExadataInsight#opsi_private_endpoint_id}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#service_name OpsiExadataInsight#service_name}.

---

##### `SystemTags`<sup>Optional</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails.property.systemTags"></a>

```go
SystemTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#system_tags OpsiExadataInsight#system_tags}.

---

### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

&opsiexadatainsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails {
	CredentialType: *string,
	CredentialSourceName: *string,
	PasswordSecretId: *string,
	Role: *string,
	UserName: *string,
	WalletSecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.credentialType">CredentialType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_type OpsiExadataInsight#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.credentialSourceName">CredentialSourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_source_name OpsiExadataInsight#credential_source_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#password_secret_id OpsiExadataInsight#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#role OpsiExadataInsight#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#user_name OpsiExadataInsight#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.walletSecretId">WalletSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#wallet_secret_id OpsiExadataInsight#wallet_secret_id}. |

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.credentialType"></a>

```go
CredentialType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_type OpsiExadataInsight#credential_type}.

---

##### `CredentialSourceName`<sup>Optional</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.credentialSourceName"></a>

```go
CredentialSourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_source_name OpsiExadataInsight#credential_source_name}.

---

##### `PasswordSecretId`<sup>Optional</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.passwordSecretId"></a>

```go
PasswordSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#password_secret_id OpsiExadataInsight#password_secret_id}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#role OpsiExadataInsight#role}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#user_name OpsiExadataInsight#user_name}.

---

##### `WalletSecretId`<sup>Optional</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails.property.walletSecretId"></a>

```go
WalletSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#wallet_secret_id OpsiExadataInsight#wallet_secret_id}.

---

### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

&opsiexadatainsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails {
	HostName: *string,
	Hosts: interface{},
	Port: *f64,
	Protocol: *string,
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#host_name OpsiExadataInsight#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.hosts">Hosts</a></code> | <code>interface{}</code> | hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#port OpsiExadataInsight#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#protocol OpsiExadataInsight#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#service_name OpsiExadataInsight#service_name}. |

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#host_name OpsiExadataInsight#host_name}.

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.hosts"></a>

```go
Hosts interface{}
```

- *Type:* interface{}

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#hosts OpsiExadataInsight#hosts}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#port OpsiExadataInsight#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#protocol OpsiExadataInsight#protocol}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#service_name OpsiExadataInsight#service_name}.

---

### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

&opsiexadatainsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts {
	HostIp: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts.property.hostIp">HostIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#host_ip OpsiExadataInsight#host_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#port OpsiExadataInsight#port}. |

---

##### `HostIp`<sup>Optional</sup> <a name="HostIp" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts.property.hostIp"></a>

```go
HostIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#host_ip OpsiExadataInsight#host_ip}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#port OpsiExadataInsight#port}.

---

### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

&opsiexadatainsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails {
	CredentialType: *string,
	CredentialSourceName: *string,
	PasswordSecretId: *string,
	Role: *string,
	UserName: *string,
	WalletSecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.credentialType">CredentialType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_type OpsiExadataInsight#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.credentialSourceName">CredentialSourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_source_name OpsiExadataInsight#credential_source_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#password_secret_id OpsiExadataInsight#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#role OpsiExadataInsight#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#user_name OpsiExadataInsight#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.walletSecretId">WalletSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#wallet_secret_id OpsiExadataInsight#wallet_secret_id}. |

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.credentialType"></a>

```go
CredentialType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_type OpsiExadataInsight#credential_type}.

---

##### `CredentialSourceName`<sup>Optional</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.credentialSourceName"></a>

```go
CredentialSourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#credential_source_name OpsiExadataInsight#credential_source_name}.

---

##### `PasswordSecretId`<sup>Optional</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.passwordSecretId"></a>

```go
PasswordSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#password_secret_id OpsiExadataInsight#password_secret_id}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#role OpsiExadataInsight#role}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#user_name OpsiExadataInsight#user_name}.

---

##### `WalletSecretId`<sup>Optional</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails.property.walletSecretId"></a>

```go
WalletSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#wallet_secret_id OpsiExadataInsight#wallet_secret_id}.

---

### OpsiExadataInsightTimeouts <a name="OpsiExadataInsightTimeouts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

&opsiexadatainsight.OpsiExadataInsightTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#create OpsiExadataInsight#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#delete OpsiExadataInsight#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#update OpsiExadataInsight#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#create OpsiExadataInsight#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#delete OpsiExadataInsight#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_exadata_insight#update OpsiExadataInsight#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiExadataInsightMemberVmClusterDetailsList <a name="OpsiExadataInsightMemberVmClusterDetailsList" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.NewOpsiExadataInsightMemberVmClusterDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsiExadataInsightMemberVmClusterDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.get"></a>

```go
func Get(index *f64) OpsiExadataInsightMemberVmClusterDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.NewOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetCredentialSourceName">ResetCredentialSourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetPasswordSecretId">ResetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetWalletSecretId">ResetWalletSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialSourceName` <a name="ResetCredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetCredentialSourceName"></a>

```go
func ResetCredentialSourceName()
```

##### `ResetPasswordSecretId` <a name="ResetPasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetPasswordSecretId"></a>

```go
func ResetPasswordSecretId()
```

##### `ResetRole` <a name="ResetRole" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetRole"></a>

```go
func ResetRole()
```

##### `ResetUserName` <a name="ResetUserName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetUserName"></a>

```go
func ResetUserName()
```

##### `ResetWalletSecretId` <a name="ResetWalletSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.resetWalletSecretId"></a>

```go
func ResetWalletSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialSourceNameInput">CredentialSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.walletSecretIdInput">WalletSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialSourceName">CredentialSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.walletSecretId">WalletSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialSourceNameInput`<sup>Optional</sup> <a name="CredentialSourceNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialSourceNameInput"></a>

```go
func CredentialSourceNameInput() *string
```

- *Type:* *string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialTypeInput"></a>

```go
func CredentialTypeInput() *string
```

- *Type:* *string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```go
func PasswordSecretIdInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `WalletSecretIdInput`<sup>Optional</sup> <a name="WalletSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.walletSecretIdInput"></a>

```go
func WalletSecretIdInput() *string
```

- *Type:* *string

---

##### `CredentialSourceName`<sup>Required</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialSourceName"></a>

```go
func CredentialSourceName() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `WalletSecretId`<sup>Required</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.walletSecretId"></a>

```go
func WalletSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a>

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.NewOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.get"></a>

```go
func Get(index *f64) OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.NewOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resetHostIp">ResetHostIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostIp` <a name="ResetHostIp" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resetHostIp"></a>

```go
func ResetHostIp()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.hostIpInput">HostIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.hostIp">HostIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostIpInput`<sup>Optional</sup> <a name="HostIpInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.hostIpInput"></a>

```go
func HostIpInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `HostIp`<sup>Required</sup> <a name="HostIp" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.hostIp"></a>

```go
func HostIp() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.NewOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.putHosts">PutHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHosts` <a name="PutHosts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.putHosts"></a>

```go
func PutHosts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.putHosts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHostName` <a name="ResetHostName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetHostName"></a>

```go
func ResetHostName()
```

##### `ResetHosts` <a name="ResetHosts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetHosts"></a>

```go
func ResetHosts()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetServiceName` <a name="ResetServiceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hosts">Hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostsInput">HostsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hosts"></a>

```go
func Hosts() OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList</a>

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostsInput"></a>

```go
func HostsInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a>

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.NewOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetCredentialSourceName">ResetCredentialSourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetPasswordSecretId">ResetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetWalletSecretId">ResetWalletSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialSourceName` <a name="ResetCredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetCredentialSourceName"></a>

```go
func ResetCredentialSourceName()
```

##### `ResetPasswordSecretId` <a name="ResetPasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetPasswordSecretId"></a>

```go
func ResetPasswordSecretId()
```

##### `ResetRole` <a name="ResetRole" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetRole"></a>

```go
func ResetRole()
```

##### `ResetUserName` <a name="ResetUserName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetUserName"></a>

```go
func ResetUserName()
```

##### `ResetWalletSecretId` <a name="ResetWalletSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.resetWalletSecretId"></a>

```go
func ResetWalletSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialSourceNameInput">CredentialSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.walletSecretIdInput">WalletSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialSourceName">CredentialSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.walletSecretId">WalletSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialSourceNameInput`<sup>Optional</sup> <a name="CredentialSourceNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialSourceNameInput"></a>

```go
func CredentialSourceNameInput() *string
```

- *Type:* *string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialTypeInput"></a>

```go
func CredentialTypeInput() *string
```

- *Type:* *string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```go
func PasswordSecretIdInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `WalletSecretIdInput`<sup>Optional</sup> <a name="WalletSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.walletSecretIdInput"></a>

```go
func WalletSecretIdInput() *string
```

- *Type:* *string

---

##### `CredentialSourceName`<sup>Required</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialSourceName"></a>

```go
func CredentialSourceName() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `WalletSecretId`<sup>Required</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.walletSecretId"></a>

```go
func WalletSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a>

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.NewOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.get"></a>

```go
func Get(index *f64) OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference <a name="OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.NewOpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putConnectionCredentialDetails">PutConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putConnectionDetails">PutConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putCredentialDetails">PutCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetConnectionCredentialDetails">ResetConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetConnectionDetails">ResetConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetCredentialDetails">ResetCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDatabaseResourceType">ResetDatabaseResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDbmPrivateEndpointId">ResetDbmPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetEntitySource">ResetEntitySource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetManagementAgentId">ResetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetOpsiPrivateEndpointId">ResetOpsiPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetSystemTags">ResetSystemTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectionCredentialDetails` <a name="PutConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putConnectionCredentialDetails"></a>

```go
func PutConnectionCredentialDetails(value OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putConnectionCredentialDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a>

---

##### `PutConnectionDetails` <a name="PutConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putConnectionDetails"></a>

```go
func PutConnectionDetails(value OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putConnectionDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a>

---

##### `PutCredentialDetails` <a name="PutCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putCredentialDetails"></a>

```go
func PutCredentialDetails(value OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.putCredentialDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a>

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetConnectionCredentialDetails` <a name="ResetConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetConnectionCredentialDetails"></a>

```go
func ResetConnectionCredentialDetails()
```

##### `ResetConnectionDetails` <a name="ResetConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetConnectionDetails"></a>

```go
func ResetConnectionDetails()
```

##### `ResetCredentialDetails` <a name="ResetCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetCredentialDetails"></a>

```go
func ResetCredentialDetails()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDatabaseId"></a>

```go
func ResetDatabaseId()
```

##### `ResetDatabaseResourceType` <a name="ResetDatabaseResourceType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDatabaseResourceType"></a>

```go
func ResetDatabaseResourceType()
```

##### `ResetDbmPrivateEndpointId` <a name="ResetDbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDbmPrivateEndpointId"></a>

```go
func ResetDbmPrivateEndpointId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetDeploymentType"></a>

```go
func ResetDeploymentType()
```

##### `ResetEntitySource` <a name="ResetEntitySource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetEntitySource"></a>

```go
func ResetEntitySource()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetManagementAgentId` <a name="ResetManagementAgentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetManagementAgentId"></a>

```go
func ResetManagementAgentId()
```

##### `ResetOpsiPrivateEndpointId` <a name="ResetOpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetOpsiPrivateEndpointId"></a>

```go
func ResetOpsiPrivateEndpointId()
```

##### `ResetServiceName` <a name="ResetServiceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetSystemTags` <a name="ResetSystemTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.resetSystemTags"></a>

```go
func ResetSystemTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionCredentialDetails">ConnectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionDetails">ConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.credentialDetails">CredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionCredentialDetailsInput">ConnectionCredentialDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionDetailsInput">ConnectionDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.credentialDetailsInput">CredentialDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseResourceTypeInput">DatabaseResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.dbmPrivateEndpointIdInput">DbmPrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.entitySourceInput">EntitySourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.managementAgentIdInput">ManagementAgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.opsiPrivateEndpointIdInput">OpsiPrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.systemTagsInput">SystemTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseResourceType">DatabaseResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.dbmPrivateEndpointId">DbmPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.entitySource">EntitySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.systemTags">SystemTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionCredentialDetails`<sup>Required</sup> <a name="ConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionCredentialDetails"></a>

```go
func ConnectionCredentialDetails() OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference</a>

---

##### `ConnectionDetails`<sup>Required</sup> <a name="ConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionDetails"></a>

```go
func ConnectionDetails() OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference</a>

---

##### `CredentialDetails`<sup>Required</sup> <a name="CredentialDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.credentialDetails"></a>

```go
func CredentialDetails() OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConnectionCredentialDetailsInput`<sup>Optional</sup> <a name="ConnectionCredentialDetailsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionCredentialDetailsInput"></a>

```go
func ConnectionCredentialDetailsInput() OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails</a>

---

##### `ConnectionDetailsInput`<sup>Optional</sup> <a name="ConnectionDetailsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.connectionDetailsInput"></a>

```go
func ConnectionDetailsInput() OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails</a>

---

##### `CredentialDetailsInput`<sup>Optional</sup> <a name="CredentialDetailsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.credentialDetailsInput"></a>

```go
func CredentialDetailsInput() OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails</a>

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `DatabaseResourceTypeInput`<sup>Optional</sup> <a name="DatabaseResourceTypeInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseResourceTypeInput"></a>

```go
func DatabaseResourceTypeInput() *string
```

- *Type:* *string

---

##### `DbmPrivateEndpointIdInput`<sup>Optional</sup> <a name="DbmPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.dbmPrivateEndpointIdInput"></a>

```go
func DbmPrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `EntitySourceInput`<sup>Optional</sup> <a name="EntitySourceInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.entitySourceInput"></a>

```go
func EntitySourceInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ManagementAgentIdInput`<sup>Optional</sup> <a name="ManagementAgentIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.managementAgentIdInput"></a>

```go
func ManagementAgentIdInput() *string
```

- *Type:* *string

---

##### `OpsiPrivateEndpointIdInput`<sup>Optional</sup> <a name="OpsiPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.opsiPrivateEndpointIdInput"></a>

```go
func OpsiPrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `SystemTagsInput`<sup>Optional</sup> <a name="SystemTagsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.systemTagsInput"></a>

```go
func SystemTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseResourceType`<sup>Required</sup> <a name="DatabaseResourceType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.databaseResourceType"></a>

```go
func DatabaseResourceType() *string
```

- *Type:* *string

---

##### `DbmPrivateEndpointId`<sup>Required</sup> <a name="DbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.dbmPrivateEndpointId"></a>

```go
func DbmPrivateEndpointId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `EntitySource`<sup>Required</sup> <a name="EntitySource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.entitySource"></a>

```go
func EntitySource() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.managementAgentId"></a>

```go
func ManagementAgentId() *string
```

- *Type:* *string

---

##### `OpsiPrivateEndpointId`<sup>Required</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.opsiPrivateEndpointId"></a>

```go
func OpsiPrivateEndpointId() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.systemTags"></a>

```go
func SystemTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsiExadataInsightMemberVmClusterDetailsOutputReference <a name="OpsiExadataInsightMemberVmClusterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.NewOpsiExadataInsightMemberVmClusterDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsiExadataInsightMemberVmClusterDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.putMemberDatabaseDetails">PutMemberDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetDbmPrivateEndpointId">ResetDbmPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetMemberDatabaseDetails">ResetMemberDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetOpsiPrivateEndpointId">ResetOpsiPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetVmclusterId">ResetVmclusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetVmClusterType">ResetVmClusterType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMemberDatabaseDetails` <a name="PutMemberDatabaseDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.putMemberDatabaseDetails"></a>

```go
func PutMemberDatabaseDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.putMemberDatabaseDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDbmPrivateEndpointId` <a name="ResetDbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetDbmPrivateEndpointId"></a>

```go
func ResetDbmPrivateEndpointId()
```

##### `ResetMemberDatabaseDetails` <a name="ResetMemberDatabaseDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetMemberDatabaseDetails"></a>

```go
func ResetMemberDatabaseDetails()
```

##### `ResetOpsiPrivateEndpointId` <a name="ResetOpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetOpsiPrivateEndpointId"></a>

```go
func ResetOpsiPrivateEndpointId()
```

##### `ResetVmclusterId` <a name="ResetVmclusterId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetVmclusterId"></a>

```go
func ResetVmclusterId()
```

##### `ResetVmClusterType` <a name="ResetVmClusterType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.resetVmClusterType"></a>

```go
func ResetVmClusterType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.memberDatabaseDetails">MemberDatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.dbmPrivateEndpointIdInput">DbmPrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.memberDatabaseDetailsInput">MemberDatabaseDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.opsiPrivateEndpointIdInput">OpsiPrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmclusterIdInput">VmclusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmClusterTypeInput">VmClusterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.dbmPrivateEndpointId">DbmPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmclusterId">VmclusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmClusterType">VmClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemberDatabaseDetails`<sup>Required</sup> <a name="MemberDatabaseDetails" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.memberDatabaseDetails"></a>

```go
func MemberDatabaseDetails() OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList">OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DbmPrivateEndpointIdInput`<sup>Optional</sup> <a name="DbmPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.dbmPrivateEndpointIdInput"></a>

```go
func DbmPrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `MemberDatabaseDetailsInput`<sup>Optional</sup> <a name="MemberDatabaseDetailsInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.memberDatabaseDetailsInput"></a>

```go
func MemberDatabaseDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `OpsiPrivateEndpointIdInput`<sup>Optional</sup> <a name="OpsiPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.opsiPrivateEndpointIdInput"></a>

```go
func OpsiPrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `VmclusterIdInput`<sup>Optional</sup> <a name="VmclusterIdInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmclusterIdInput"></a>

```go
func VmclusterIdInput() *string
```

- *Type:* *string

---

##### `VmClusterTypeInput`<sup>Optional</sup> <a name="VmClusterTypeInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmClusterTypeInput"></a>

```go
func VmClusterTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DbmPrivateEndpointId`<sup>Required</sup> <a name="DbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.dbmPrivateEndpointId"></a>

```go
func DbmPrivateEndpointId() *string
```

- *Type:* *string

---

##### `OpsiPrivateEndpointId`<sup>Required</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.opsiPrivateEndpointId"></a>

```go
func OpsiPrivateEndpointId() *string
```

- *Type:* *string

---

##### `VmclusterId`<sup>Required</sup> <a name="VmclusterId" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmclusterId"></a>

```go
func VmclusterId() *string
```

- *Type:* *string

---

##### `VmClusterType`<sup>Required</sup> <a name="VmClusterType" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.vmClusterType"></a>

```go
func VmClusterType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightMemberVmClusterDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsiExadataInsightTimeoutsOutputReference <a name="OpsiExadataInsightTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsiexadatainsight"

opsiexadatainsight.NewOpsiExadataInsightTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiExadataInsightTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiExadataInsight.OpsiExadataInsightTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



