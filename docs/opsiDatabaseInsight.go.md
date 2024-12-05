# `opsiDatabaseInsight` Submodule <a name="`opsiDatabaseInsight` Submodule" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiDatabaseInsight <a name="OpsiDatabaseInsight" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight oci_opsi_database_insight}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

opsidatabaseinsight.NewOpsiDatabaseInsight(scope Construct, id *string, config OpsiDatabaseInsightConfig) OpsiDatabaseInsight
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig">OpsiDatabaseInsightConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig">OpsiDatabaseInsightConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails">PutConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails">PutConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails">PutCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionCredentialDetails">ResetConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionDetails">ResetConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectorId">ResetConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetCredentialDetails">ResetCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseConnectionStatusDetails">ResetDatabaseConnectionStatusDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseResourceType">ResetDatabaseResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDbmPrivateEndpointId">ResetDbmPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerBridgeId">ResetEnterpriseManagerBridgeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerEntityIdentifier">ResetEnterpriseManagerEntityIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerIdentifier">ResetEnterpriseManagerIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetExadataInsightId">ResetExadataInsightId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetIsAdvancedFeaturesEnabled">ResetIsAdvancedFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetManagementAgentId">ResetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOpsiPrivateEndpointId">ResetOpsiPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionCredentialDetails` <a name="PutConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails"></a>

```go
func PutConnectionCredentialDetails(value OpsiDatabaseInsightConnectionCredentialDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionCredentialDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

---

##### `PutConnectionDetails` <a name="PutConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails"></a>

```go
func PutConnectionDetails(value OpsiDatabaseInsightConnectionDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putConnectionDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

---

##### `PutCredentialDetails` <a name="PutCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails"></a>

```go
func PutCredentialDetails(value OpsiDatabaseInsightCredentialDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putCredentialDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts"></a>

```go
func PutTimeouts(value OpsiDatabaseInsightTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>

---

##### `ResetConnectionCredentialDetails` <a name="ResetConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionCredentialDetails"></a>

```go
func ResetConnectionCredentialDetails()
```

##### `ResetConnectionDetails` <a name="ResetConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectionDetails"></a>

```go
func ResetConnectionDetails()
```

##### `ResetConnectorId` <a name="ResetConnectorId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetConnectorId"></a>

```go
func ResetConnectorId()
```

##### `ResetCredentialDetails` <a name="ResetCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetCredentialDetails"></a>

```go
func ResetCredentialDetails()
```

##### `ResetDatabaseConnectionStatusDetails` <a name="ResetDatabaseConnectionStatusDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseConnectionStatusDetails"></a>

```go
func ResetDatabaseConnectionStatusDetails()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseId"></a>

```go
func ResetDatabaseId()
```

##### `ResetDatabaseResourceType` <a name="ResetDatabaseResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDatabaseResourceType"></a>

```go
func ResetDatabaseResourceType()
```

##### `ResetDbmPrivateEndpointId` <a name="ResetDbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDbmPrivateEndpointId"></a>

```go
func ResetDbmPrivateEndpointId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetDeploymentType"></a>

```go
func ResetDeploymentType()
```

##### `ResetEnterpriseManagerBridgeId` <a name="ResetEnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerBridgeId"></a>

```go
func ResetEnterpriseManagerBridgeId()
```

##### `ResetEnterpriseManagerEntityIdentifier` <a name="ResetEnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerEntityIdentifier"></a>

```go
func ResetEnterpriseManagerEntityIdentifier()
```

##### `ResetEnterpriseManagerIdentifier` <a name="ResetEnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetEnterpriseManagerIdentifier"></a>

```go
func ResetEnterpriseManagerIdentifier()
```

##### `ResetExadataInsightId` <a name="ResetExadataInsightId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetExadataInsightId"></a>

```go
func ResetExadataInsightId()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetId"></a>

```go
func ResetId()
```

##### `ResetIsAdvancedFeaturesEnabled` <a name="ResetIsAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetIsAdvancedFeaturesEnabled"></a>

```go
func ResetIsAdvancedFeaturesEnabled()
```

##### `ResetManagementAgentId` <a name="ResetManagementAgentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetManagementAgentId"></a>

```go
func ResetManagementAgentId()
```

##### `ResetOpsiPrivateEndpointId` <a name="ResetOpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetOpsiPrivateEndpointId"></a>

```go
func ResetOpsiPrivateEndpointId()
```

##### `ResetServiceName` <a name="ResetServiceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiDatabaseInsight resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

opsidatabaseinsight.OpsiDatabaseInsight_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

opsidatabaseinsight.OpsiDatabaseInsight_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

opsidatabaseinsight.OpsiDatabaseInsight_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

opsidatabaseinsight.OpsiDatabaseInsight_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpsiDatabaseInsight resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpsiDatabaseInsight to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpsiDatabaseInsight that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpsiDatabaseInsight to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetails">ConnectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference">OpsiDatabaseInsightConnectionCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetails">ConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference">OpsiDatabaseInsightConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetails">CredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference">OpsiDatabaseInsightCredentialDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseDisplayName">DatabaseDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityDisplayName">EnterpriseManagerEntityDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityName">EnterpriseManagerEntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityType">EnterpriseManagerEntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHeatWaveClusterAttached">IsHeatWaveClusterAttached</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHighlyAvailable">IsHighlyAvailable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.parentId">ParentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.processorCount">ProcessorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.rootId">RootId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference">OpsiDatabaseInsightTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetailsInput">ConnectionCredentialDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetailsInput">ConnectionDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorIdInput">ConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetailsInput">CredentialDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetailsInput">DatabaseConnectionStatusDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceTypeInput">DatabaseResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointIdInput">DbmPrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeIdInput">EnterpriseManagerBridgeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifierInput">EnterpriseManagerEntityIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifierInput">EnterpriseManagerIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySourceInput">EntitySourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightIdInput">ExadataInsightIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabledInput">IsAdvancedFeaturesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentIdInput">ManagementAgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointIdInput">OpsiPrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorId">ConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetails">DatabaseConnectionStatusDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceType">DatabaseResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointId">DbmPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifier">EnterpriseManagerEntityIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifier">EnterpriseManagerIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySource">EntitySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightId">ExadataInsightId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabled">IsAdvancedFeaturesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionCredentialDetails`<sup>Required</sup> <a name="ConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetails"></a>

```go
func ConnectionCredentialDetails() OpsiDatabaseInsightConnectionCredentialDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference">OpsiDatabaseInsightConnectionCredentialDetailsOutputReference</a>

---

##### `ConnectionDetails`<sup>Required</sup> <a name="ConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetails"></a>

```go
func ConnectionDetails() OpsiDatabaseInsightConnectionDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference">OpsiDatabaseInsightConnectionDetailsOutputReference</a>

---

##### `CredentialDetails`<sup>Required</sup> <a name="CredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetails"></a>

```go
func CredentialDetails() OpsiDatabaseInsightCredentialDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference">OpsiDatabaseInsightCredentialDetailsOutputReference</a>

---

##### `DatabaseDisplayName`<sup>Required</sup> <a name="DatabaseDisplayName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseDisplayName"></a>

```go
func DatabaseDisplayName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityDisplayName`<sup>Required</sup> <a name="EnterpriseManagerEntityDisplayName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityDisplayName"></a>

```go
func EnterpriseManagerEntityDisplayName() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityName`<sup>Required</sup> <a name="EnterpriseManagerEntityName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityName"></a>

```go
func EnterpriseManagerEntityName() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityType`<sup>Required</sup> <a name="EnterpriseManagerEntityType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityType"></a>

```go
func EnterpriseManagerEntityType() *string
```

- *Type:* *string

---

##### `IsHeatWaveClusterAttached`<sup>Required</sup> <a name="IsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHeatWaveClusterAttached"></a>

```go
func IsHeatWaveClusterAttached() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHighlyAvailable`<sup>Required</sup> <a name="IsHighlyAvailable" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isHighlyAvailable"></a>

```go
func IsHighlyAvailable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.parentId"></a>

```go
func ParentId() *string
```

- *Type:* *string

---

##### `ProcessorCount`<sup>Required</sup> <a name="ProcessorCount" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.processorCount"></a>

```go
func ProcessorCount() *f64
```

- *Type:* *f64

---

##### `RootId`<sup>Required</sup> <a name="RootId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.rootId"></a>

```go
func RootId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeouts"></a>

```go
func Timeouts() OpsiDatabaseInsightTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference">OpsiDatabaseInsightTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConnectionCredentialDetailsInput`<sup>Optional</sup> <a name="ConnectionCredentialDetailsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionCredentialDetailsInput"></a>

```go
func ConnectionCredentialDetailsInput() OpsiDatabaseInsightConnectionCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

---

##### `ConnectionDetailsInput`<sup>Optional</sup> <a name="ConnectionDetailsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectionDetailsInput"></a>

```go
func ConnectionDetailsInput() OpsiDatabaseInsightConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

---

##### `ConnectorIdInput`<sup>Optional</sup> <a name="ConnectorIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorIdInput"></a>

```go
func ConnectorIdInput() *string
```

- *Type:* *string

---

##### `CredentialDetailsInput`<sup>Optional</sup> <a name="CredentialDetailsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.credentialDetailsInput"></a>

```go
func CredentialDetailsInput() OpsiDatabaseInsightCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

---

##### `DatabaseConnectionStatusDetailsInput`<sup>Optional</sup> <a name="DatabaseConnectionStatusDetailsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetailsInput"></a>

```go
func DatabaseConnectionStatusDetailsInput() *string
```

- *Type:* *string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `DatabaseResourceTypeInput`<sup>Optional</sup> <a name="DatabaseResourceTypeInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceTypeInput"></a>

```go
func DatabaseResourceTypeInput() *string
```

- *Type:* *string

---

##### `DbmPrivateEndpointIdInput`<sup>Optional</sup> <a name="DbmPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointIdInput"></a>

```go
func DbmPrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `EnterpriseManagerBridgeIdInput`<sup>Optional</sup> <a name="EnterpriseManagerBridgeIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeIdInput"></a>

```go
func EnterpriseManagerBridgeIdInput() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityIdentifierInput`<sup>Optional</sup> <a name="EnterpriseManagerEntityIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifierInput"></a>

```go
func EnterpriseManagerEntityIdentifierInput() *string
```

- *Type:* *string

---

##### `EnterpriseManagerIdentifierInput`<sup>Optional</sup> <a name="EnterpriseManagerIdentifierInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifierInput"></a>

```go
func EnterpriseManagerIdentifierInput() *string
```

- *Type:* *string

---

##### `EntitySourceInput`<sup>Optional</sup> <a name="EntitySourceInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySourceInput"></a>

```go
func EntitySourceInput() *string
```

- *Type:* *string

---

##### `ExadataInsightIdInput`<sup>Optional</sup> <a name="ExadataInsightIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightIdInput"></a>

```go
func ExadataInsightIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAdvancedFeaturesEnabledInput`<sup>Optional</sup> <a name="IsAdvancedFeaturesEnabledInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabledInput"></a>

```go
func IsAdvancedFeaturesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ManagementAgentIdInput`<sup>Optional</sup> <a name="ManagementAgentIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentIdInput"></a>

```go
func ManagementAgentIdInput() *string
```

- *Type:* *string

---

##### `OpsiPrivateEndpointIdInput`<sup>Optional</sup> <a name="OpsiPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointIdInput"></a>

```go
func OpsiPrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.connectorId"></a>

```go
func ConnectorId() *string
```

- *Type:* *string

---

##### `DatabaseConnectionStatusDetails`<sup>Required</sup> <a name="DatabaseConnectionStatusDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseConnectionStatusDetails"></a>

```go
func DatabaseConnectionStatusDetails() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseResourceType`<sup>Required</sup> <a name="DatabaseResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.databaseResourceType"></a>

```go
func DatabaseResourceType() *string
```

- *Type:* *string

---

##### `DbmPrivateEndpointId`<sup>Required</sup> <a name="DbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.dbmPrivateEndpointId"></a>

```go
func DbmPrivateEndpointId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `EnterpriseManagerBridgeId`<sup>Required</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerBridgeId"></a>

```go
func EnterpriseManagerBridgeId() *string
```

- *Type:* *string

---

##### `EnterpriseManagerEntityIdentifier`<sup>Required</sup> <a name="EnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerEntityIdentifier"></a>

```go
func EnterpriseManagerEntityIdentifier() *string
```

- *Type:* *string

---

##### `EnterpriseManagerIdentifier`<sup>Required</sup> <a name="EnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.enterpriseManagerIdentifier"></a>

```go
func EnterpriseManagerIdentifier() *string
```

- *Type:* *string

---

##### `EntitySource`<sup>Required</sup> <a name="EntitySource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.entitySource"></a>

```go
func EntitySource() *string
```

- *Type:* *string

---

##### `ExadataInsightId`<sup>Required</sup> <a name="ExadataInsightId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.exadataInsightId"></a>

```go
func ExadataInsightId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAdvancedFeaturesEnabled`<sup>Required</sup> <a name="IsAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.isAdvancedFeaturesEnabled"></a>

```go
func IsAdvancedFeaturesEnabled() interface{}
```

- *Type:* interface{}

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.managementAgentId"></a>

```go
func ManagementAgentId() *string
```

- *Type:* *string

---

##### `OpsiPrivateEndpointId`<sup>Required</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.opsiPrivateEndpointId"></a>

```go
func OpsiPrivateEndpointId() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsight.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiDatabaseInsightConfig <a name="OpsiDatabaseInsightConfig" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

&opsidatabaseinsight.OpsiDatabaseInsightConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	EntitySource: *string,
	ConnectionCredentialDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails,
	ConnectionDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails,
	ConnectorId: *string,
	CredentialDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails,
	DatabaseConnectionStatusDetails: *string,
	DatabaseId: *string,
	DatabaseResourceType: *string,
	DbmPrivateEndpointId: *string,
	DefinedTags: *map[string]*string,
	DeploymentType: *string,
	EnterpriseManagerBridgeId: *string,
	EnterpriseManagerEntityIdentifier: *string,
	EnterpriseManagerIdentifier: *string,
	ExadataInsightId: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsAdvancedFeaturesEnabled: interface{},
	ManagementAgentId: *string,
	OpsiPrivateEndpointId: *string,
	ServiceName: *string,
	Status: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#compartment_id OpsiDatabaseInsight#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.entitySource">EntitySource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#entity_source OpsiDatabaseInsight#entity_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionCredentialDetails">ConnectionCredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | connection_credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionDetails">ConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | connection_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectorId">ConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connector_id OpsiDatabaseInsight#connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.credentialDetails">CredentialDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | credential_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseConnectionStatusDetails">DatabaseConnectionStatusDetails</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_connection_status_details OpsiDatabaseInsight#database_connection_status_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_id OpsiDatabaseInsight#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseResourceType">DatabaseResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_resource_type OpsiDatabaseInsight#database_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dbmPrivateEndpointId">DbmPrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#dbm_private_endpoint_id OpsiDatabaseInsight#dbm_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#defined_tags OpsiDatabaseInsight#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#deployment_type OpsiDatabaseInsight#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerBridgeId">EnterpriseManagerBridgeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_bridge_id OpsiDatabaseInsight#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerEntityIdentifier">EnterpriseManagerEntityIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_entity_identifier OpsiDatabaseInsight#enterprise_manager_entity_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerIdentifier">EnterpriseManagerIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_identifier OpsiDatabaseInsight#enterprise_manager_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.exadataInsightId">ExadataInsightId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#exadata_insight_id OpsiDatabaseInsight#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#freeform_tags OpsiDatabaseInsight#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#id OpsiDatabaseInsight#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.isAdvancedFeaturesEnabled">IsAdvancedFeaturesEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#is_advanced_features_enabled OpsiDatabaseInsight#is_advanced_features_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.managementAgentId">ManagementAgentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#management_agent_id OpsiDatabaseInsight#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.opsiPrivateEndpointId">OpsiPrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#opsi_private_endpoint_id OpsiDatabaseInsight#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#status OpsiDatabaseInsight#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#compartment_id OpsiDatabaseInsight#compartment_id}.

---

##### `EntitySource`<sup>Required</sup> <a name="EntitySource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.entitySource"></a>

```go
EntitySource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#entity_source OpsiDatabaseInsight#entity_source}.

---

##### `ConnectionCredentialDetails`<sup>Optional</sup> <a name="ConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionCredentialDetails"></a>

```go
ConnectionCredentialDetails OpsiDatabaseInsightConnectionCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

connection_credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connection_credential_details OpsiDatabaseInsight#connection_credential_details}

---

##### `ConnectionDetails`<sup>Optional</sup> <a name="ConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectionDetails"></a>

```go
ConnectionDetails OpsiDatabaseInsightConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

connection_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connection_details OpsiDatabaseInsight#connection_details}

---

##### `ConnectorId`<sup>Optional</sup> <a name="ConnectorId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.connectorId"></a>

```go
ConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#connector_id OpsiDatabaseInsight#connector_id}.

---

##### `CredentialDetails`<sup>Optional</sup> <a name="CredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.credentialDetails"></a>

```go
CredentialDetails OpsiDatabaseInsightCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

credential_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_details OpsiDatabaseInsight#credential_details}

---

##### `DatabaseConnectionStatusDetails`<sup>Optional</sup> <a name="DatabaseConnectionStatusDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseConnectionStatusDetails"></a>

```go
DatabaseConnectionStatusDetails *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_connection_status_details OpsiDatabaseInsight#database_connection_status_details}.

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_id OpsiDatabaseInsight#database_id}.

---

##### `DatabaseResourceType`<sup>Optional</sup> <a name="DatabaseResourceType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.databaseResourceType"></a>

```go
DatabaseResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#database_resource_type OpsiDatabaseInsight#database_resource_type}.

---

##### `DbmPrivateEndpointId`<sup>Optional</sup> <a name="DbmPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.dbmPrivateEndpointId"></a>

```go
DbmPrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#dbm_private_endpoint_id OpsiDatabaseInsight#dbm_private_endpoint_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#defined_tags OpsiDatabaseInsight#defined_tags}.

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#deployment_type OpsiDatabaseInsight#deployment_type}.

---

##### `EnterpriseManagerBridgeId`<sup>Optional</sup> <a name="EnterpriseManagerBridgeId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerBridgeId"></a>

```go
EnterpriseManagerBridgeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_bridge_id OpsiDatabaseInsight#enterprise_manager_bridge_id}.

---

##### `EnterpriseManagerEntityIdentifier`<sup>Optional</sup> <a name="EnterpriseManagerEntityIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerEntityIdentifier"></a>

```go
EnterpriseManagerEntityIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_entity_identifier OpsiDatabaseInsight#enterprise_manager_entity_identifier}.

---

##### `EnterpriseManagerIdentifier`<sup>Optional</sup> <a name="EnterpriseManagerIdentifier" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.enterpriseManagerIdentifier"></a>

```go
EnterpriseManagerIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#enterprise_manager_identifier OpsiDatabaseInsight#enterprise_manager_identifier}.

---

##### `ExadataInsightId`<sup>Optional</sup> <a name="ExadataInsightId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.exadataInsightId"></a>

```go
ExadataInsightId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#exadata_insight_id OpsiDatabaseInsight#exadata_insight_id}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#freeform_tags OpsiDatabaseInsight#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#id OpsiDatabaseInsight#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAdvancedFeaturesEnabled`<sup>Optional</sup> <a name="IsAdvancedFeaturesEnabled" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.isAdvancedFeaturesEnabled"></a>

```go
IsAdvancedFeaturesEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#is_advanced_features_enabled OpsiDatabaseInsight#is_advanced_features_enabled}.

---

##### `ManagementAgentId`<sup>Optional</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.managementAgentId"></a>

```go
ManagementAgentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#management_agent_id OpsiDatabaseInsight#management_agent_id}.

---

##### `OpsiPrivateEndpointId`<sup>Optional</sup> <a name="OpsiPrivateEndpointId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.opsiPrivateEndpointId"></a>

```go
OpsiPrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#opsi_private_endpoint_id OpsiDatabaseInsight#opsi_private_endpoint_id}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#status OpsiDatabaseInsight#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConfig.property.timeouts"></a>

```go
Timeouts OpsiDatabaseInsightTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts">OpsiDatabaseInsightTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#timeouts OpsiDatabaseInsight#timeouts}

---

### OpsiDatabaseInsightConnectionCredentialDetails <a name="OpsiDatabaseInsightConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

&opsidatabaseinsight.OpsiDatabaseInsightConnectionCredentialDetails {
	CredentialType: *string,
	CredentialSourceName: *string,
	PasswordSecretId: *string,
	Role: *string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialType">CredentialType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialSourceName">CredentialSourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}. |

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialType"></a>

```go
CredentialType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}.

---

##### `CredentialSourceName`<sup>Optional</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.credentialSourceName"></a>

```go
CredentialSourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}.

---

##### `PasswordSecretId`<sup>Optional</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.passwordSecretId"></a>

```go
PasswordSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}.

---

### OpsiDatabaseInsightConnectionDetails <a name="OpsiDatabaseInsightConnectionDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

&opsidatabaseinsight.OpsiDatabaseInsightConnectionDetails {
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
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_name OpsiDatabaseInsight#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hosts">Hosts</a></code> | <code>interface{}</code> | hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#protocol OpsiDatabaseInsight#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}. |

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_name OpsiDatabaseInsight#host_name}.

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.hosts"></a>

```go
Hosts interface{}
```

- *Type:* interface{}

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#hosts OpsiDatabaseInsight#hosts}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#protocol OpsiDatabaseInsight#protocol}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#service_name OpsiDatabaseInsight#service_name}.

---

### OpsiDatabaseInsightConnectionDetailsHosts <a name="OpsiDatabaseInsightConnectionDetailsHosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

&opsidatabaseinsight.OpsiDatabaseInsightConnectionDetailsHosts {
	HostIp: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.hostIp">HostIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_ip OpsiDatabaseInsight#host_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}. |

---

##### `HostIp`<sup>Optional</sup> <a name="HostIp" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.hostIp"></a>

```go
HostIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#host_ip OpsiDatabaseInsight#host_ip}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHosts.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#port OpsiDatabaseInsight#port}.

---

### OpsiDatabaseInsightCredentialDetails <a name="OpsiDatabaseInsightCredentialDetails" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

&opsidatabaseinsight.OpsiDatabaseInsightCredentialDetails {
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
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialType">CredentialType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialSourceName">CredentialSourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.walletSecretId">WalletSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#wallet_secret_id OpsiDatabaseInsight#wallet_secret_id}. |

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialType"></a>

```go
CredentialType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_type OpsiDatabaseInsight#credential_type}.

---

##### `CredentialSourceName`<sup>Optional</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.credentialSourceName"></a>

```go
CredentialSourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#credential_source_name OpsiDatabaseInsight#credential_source_name}.

---

##### `PasswordSecretId`<sup>Optional</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.passwordSecretId"></a>

```go
PasswordSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#password_secret_id OpsiDatabaseInsight#password_secret_id}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#role OpsiDatabaseInsight#role}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#user_name OpsiDatabaseInsight#user_name}.

---

##### `WalletSecretId`<sup>Optional</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails.property.walletSecretId"></a>

```go
WalletSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#wallet_secret_id OpsiDatabaseInsight#wallet_secret_id}.

---

### OpsiDatabaseInsightTimeouts <a name="OpsiDatabaseInsightTimeouts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

&opsidatabaseinsight.OpsiDatabaseInsightTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#create OpsiDatabaseInsight#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#delete OpsiDatabaseInsight#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#update OpsiDatabaseInsight#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#create OpsiDatabaseInsight#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#delete OpsiDatabaseInsight#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_database_insight#update OpsiDatabaseInsight#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiDatabaseInsightConnectionCredentialDetailsOutputReference <a name="OpsiDatabaseInsightConnectionCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

opsidatabaseinsight.NewOpsiDatabaseInsightConnectionCredentialDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiDatabaseInsightConnectionCredentialDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetCredentialSourceName">ResetCredentialSourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetPasswordSecretId">ResetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialSourceName` <a name="ResetCredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetCredentialSourceName"></a>

```go
func ResetCredentialSourceName()
```

##### `ResetPasswordSecretId` <a name="ResetPasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetPasswordSecretId"></a>

```go
func ResetPasswordSecretId()
```

##### `ResetRole` <a name="ResetRole" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetRole"></a>

```go
func ResetRole()
```

##### `ResetUserName` <a name="ResetUserName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.resetUserName"></a>

```go
func ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceNameInput">CredentialSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceName">CredentialSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialSourceNameInput`<sup>Optional</sup> <a name="CredentialSourceNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceNameInput"></a>

```go
func CredentialSourceNameInput() *string
```

- *Type:* *string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialTypeInput"></a>

```go
func CredentialTypeInput() *string
```

- *Type:* *string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```go
func PasswordSecretIdInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `CredentialSourceName`<sup>Required</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialSourceName"></a>

```go
func CredentialSourceName() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsiDatabaseInsightConnectionCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionCredentialDetails">OpsiDatabaseInsightConnectionCredentialDetails</a>

---


### OpsiDatabaseInsightConnectionDetailsHostsList <a name="OpsiDatabaseInsightConnectionDetailsHostsList" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

opsidatabaseinsight.NewOpsiDatabaseInsightConnectionDetailsHostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpsiDatabaseInsightConnectionDetailsHostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.get"></a>

```go
func Get(index *f64) OpsiDatabaseInsightConnectionDetailsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsiDatabaseInsightConnectionDetailsHostsOutputReference <a name="OpsiDatabaseInsightConnectionDetailsHostsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

opsidatabaseinsight.NewOpsiDatabaseInsightConnectionDetailsHostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpsiDatabaseInsightConnectionDetailsHostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetHostIp">ResetHostIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostIp` <a name="ResetHostIp" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetHostIp"></a>

```go
func ResetHostIp()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIpInput">HostIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIp">HostIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostIpInput`<sup>Optional</sup> <a name="HostIpInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIpInput"></a>

```go
func HostIpInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `HostIp`<sup>Required</sup> <a name="HostIp" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.hostIp"></a>

```go
func HostIp() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpsiDatabaseInsightConnectionDetailsOutputReference <a name="OpsiDatabaseInsightConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

opsidatabaseinsight.NewOpsiDatabaseInsightConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiDatabaseInsightConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.putHosts">PutHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHosts` <a name="PutHosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.putHosts"></a>

```go
func PutHosts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.putHosts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHostName` <a name="ResetHostName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHostName"></a>

```go
func ResetHostName()
```

##### `ResetHosts` <a name="ResetHosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetHosts"></a>

```go
func ResetHosts()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetServiceName` <a name="ResetServiceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hosts">Hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList">OpsiDatabaseInsightConnectionDetailsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostsInput">HostsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hosts"></a>

```go
func Hosts() OpsiDatabaseInsightConnectionDetailsHostsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsHostsList">OpsiDatabaseInsightConnectionDetailsHostsList</a>

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostsInput"></a>

```go
func HostsInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsiDatabaseInsightConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightConnectionDetails">OpsiDatabaseInsightConnectionDetails</a>

---


### OpsiDatabaseInsightCredentialDetailsOutputReference <a name="OpsiDatabaseInsightCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

opsidatabaseinsight.NewOpsiDatabaseInsightCredentialDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiDatabaseInsightCredentialDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetCredentialSourceName">ResetCredentialSourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetPasswordSecretId">ResetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetWalletSecretId">ResetWalletSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialSourceName` <a name="ResetCredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetCredentialSourceName"></a>

```go
func ResetCredentialSourceName()
```

##### `ResetPasswordSecretId` <a name="ResetPasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetPasswordSecretId"></a>

```go
func ResetPasswordSecretId()
```

##### `ResetRole` <a name="ResetRole" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetRole"></a>

```go
func ResetRole()
```

##### `ResetUserName` <a name="ResetUserName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetUserName"></a>

```go
func ResetUserName()
```

##### `ResetWalletSecretId` <a name="ResetWalletSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.resetWalletSecretId"></a>

```go
func ResetWalletSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceNameInput">CredentialSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretIdInput">WalletSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceName">CredentialSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretId">WalletSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialSourceNameInput`<sup>Optional</sup> <a name="CredentialSourceNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceNameInput"></a>

```go
func CredentialSourceNameInput() *string
```

- *Type:* *string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialTypeInput"></a>

```go
func CredentialTypeInput() *string
```

- *Type:* *string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretIdInput"></a>

```go
func PasswordSecretIdInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `WalletSecretIdInput`<sup>Optional</sup> <a name="WalletSecretIdInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretIdInput"></a>

```go
func WalletSecretIdInput() *string
```

- *Type:* *string

---

##### `CredentialSourceName`<sup>Required</sup> <a name="CredentialSourceName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialSourceName"></a>

```go
func CredentialSourceName() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `WalletSecretId`<sup>Required</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.walletSecretId"></a>

```go
func WalletSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() OpsiDatabaseInsightCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightCredentialDetails">OpsiDatabaseInsightCredentialDetails</a>

---


### OpsiDatabaseInsightTimeoutsOutputReference <a name="OpsiDatabaseInsightTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/opsidatabaseinsight"

opsidatabaseinsight.NewOpsiDatabaseInsightTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpsiDatabaseInsightTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiDatabaseInsight.OpsiDatabaseInsightTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



