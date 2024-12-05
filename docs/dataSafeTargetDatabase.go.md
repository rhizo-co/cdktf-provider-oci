# `dataSafeTargetDatabase` Submodule <a name="`dataSafeTargetDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeTargetDatabase <a name="DataSafeTargetDatabase" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database oci_data_safe_target_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabase(scope Construct, id *string, config DataSafeTargetDatabaseConfig) DataSafeTargetDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig">DataSafeTargetDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig">DataSafeTargetDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putConnectionOption">PutConnectionOption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putDatabaseDetails">PutDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putPeerTargetDatabaseDetails">PutPeerTargetDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetConnectionOption">ResetConnectionOption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetPeerTargetDatabaseDetails">ResetPeerTargetDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionOption` <a name="PutConnectionOption" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putConnectionOption"></a>

```go
func PutConnectionOption(value DataSafeTargetDatabaseConnectionOption)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putConnectionOption.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a>

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putCredentials"></a>

```go
func PutCredentials(value DataSafeTargetDatabaseCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a>

---

##### `PutDatabaseDetails` <a name="PutDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putDatabaseDetails"></a>

```go
func PutDatabaseDetails(value DataSafeTargetDatabaseDatabaseDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putDatabaseDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a>

---

##### `PutPeerTargetDatabaseDetails` <a name="PutPeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putPeerTargetDatabaseDetails"></a>

```go
func PutPeerTargetDatabaseDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putPeerTargetDatabaseDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeTargetDatabaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts">DataSafeTargetDatabaseTimeouts</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putTlsConfig"></a>

```go
func PutTlsConfig(value DataSafeTargetDatabaseTlsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a>

---

##### `ResetConnectionOption` <a name="ResetConnectionOption" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetConnectionOption"></a>

```go
func ResetConnectionOption()
```

##### `ResetCredentials` <a name="ResetCredentials" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetPeerTargetDatabaseDetails` <a name="ResetPeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetPeerTargetDatabaseDetails"></a>

```go
func ResetPeerTargetDatabaseDetails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetTlsConfig"></a>

```go
func ResetTlsConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeTargetDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.DataSafeTargetDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.DataSafeTargetDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.DataSafeTargetDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.DataSafeTargetDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeTargetDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeTargetDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeTargetDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeTargetDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.associatedResourceIds">AssociatedResourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.connectionOption">ConnectionOption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference">DataSafeTargetDatabaseConnectionOptionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference">DataSafeTargetDatabaseCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference">DataSafeTargetDatabaseDatabaseDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.peerTargetDatabaseDetails">PeerTargetDatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList">DataSafeTargetDatabasePeerTargetDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.peerTargetDatabases">PeerTargetDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList">DataSafeTargetDatabasePeerTargetDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference">DataSafeTargetDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference">DataSafeTargetDatabaseTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.connectionOptionInput">ConnectionOptionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.databaseDetailsInput">DatabaseDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.peerTargetDatabaseDetailsInput">PeerTargetDatabaseDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedResourceIds`<sup>Required</sup> <a name="AssociatedResourceIds" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.associatedResourceIds"></a>

```go
func AssociatedResourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionOption`<sup>Required</sup> <a name="ConnectionOption" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.connectionOption"></a>

```go
func ConnectionOption() DataSafeTargetDatabaseConnectionOptionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference">DataSafeTargetDatabaseConnectionOptionOutputReference</a>

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.credentials"></a>

```go
func Credentials() DataSafeTargetDatabaseCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference">DataSafeTargetDatabaseCredentialsOutputReference</a>

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.databaseDetails"></a>

```go
func DatabaseDetails() DataSafeTargetDatabaseDatabaseDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference">DataSafeTargetDatabaseDatabaseDetailsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `PeerTargetDatabaseDetails`<sup>Required</sup> <a name="PeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.peerTargetDatabaseDetails"></a>

```go
func PeerTargetDatabaseDetails() DataSafeTargetDatabasePeerTargetDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList">DataSafeTargetDatabasePeerTargetDatabaseDetailsList</a>

---

##### `PeerTargetDatabases`<sup>Required</sup> <a name="PeerTargetDatabases" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.peerTargetDatabases"></a>

```go
func PeerTargetDatabases() DataSafeTargetDatabasePeerTargetDatabasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList">DataSafeTargetDatabasePeerTargetDatabasesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeouts"></a>

```go
func Timeouts() DataSafeTargetDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference">DataSafeTargetDatabaseTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.tlsConfig"></a>

```go
func TlsConfig() DataSafeTargetDatabaseTlsConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference">DataSafeTargetDatabaseTlsConfigOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConnectionOptionInput`<sup>Optional</sup> <a name="ConnectionOptionInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.connectionOptionInput"></a>

```go
func ConnectionOptionInput() DataSafeTargetDatabaseConnectionOption
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a>

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.credentialsInput"></a>

```go
func CredentialsInput() DataSafeTargetDatabaseCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a>

---

##### `DatabaseDetailsInput`<sup>Optional</sup> <a name="DatabaseDetailsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.databaseDetailsInput"></a>

```go
func DatabaseDetailsInput() DataSafeTargetDatabaseDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PeerTargetDatabaseDetailsInput`<sup>Optional</sup> <a name="PeerTargetDatabaseDetailsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.peerTargetDatabaseDetailsInput"></a>

```go
func PeerTargetDatabaseDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.tlsConfigInput"></a>

```go
func TlsConfigInput() DataSafeTargetDatabaseTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeTargetDatabaseConfig <a name="DataSafeTargetDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

&datasafetargetdatabase.DataSafeTargetDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DatabaseDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails,
	ConnectionOption: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption,
	Credentials: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	PeerTargetDatabaseDetails: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts,
	TlsConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#compartment_id DataSafeTargetDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a></code> | database_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.connectionOption">ConnectionOption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a></code> | connection_option block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#defined_tags DataSafeTargetDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#description DataSafeTargetDatabase#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#display_name DataSafeTargetDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#freeform_tags DataSafeTargetDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#id DataSafeTargetDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.peerTargetDatabaseDetails">PeerTargetDatabaseDetails</a></code> | <code>interface{}</code> | peer_target_database_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts">DataSafeTargetDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a></code> | tls_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#compartment_id DataSafeTargetDatabase#compartment_id}.

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.databaseDetails"></a>

```go
DatabaseDetails DataSafeTargetDatabaseDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a>

database_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#database_details DataSafeTargetDatabase#database_details}

---

##### `ConnectionOption`<sup>Optional</sup> <a name="ConnectionOption" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.connectionOption"></a>

```go
ConnectionOption DataSafeTargetDatabaseConnectionOption
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a>

connection_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#connection_option DataSafeTargetDatabase#connection_option}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.credentials"></a>

```go
Credentials DataSafeTargetDatabaseCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#credentials DataSafeTargetDatabase#credentials}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#defined_tags DataSafeTargetDatabase#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#description DataSafeTargetDatabase#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#display_name DataSafeTargetDatabase#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#freeform_tags DataSafeTargetDatabase#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#id DataSafeTargetDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PeerTargetDatabaseDetails`<sup>Optional</sup> <a name="PeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.peerTargetDatabaseDetails"></a>

```go
PeerTargetDatabaseDetails interface{}
```

- *Type:* interface{}

peer_target_database_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#peer_target_database_details DataSafeTargetDatabase#peer_target_database_details}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.timeouts"></a>

```go
Timeouts DataSafeTargetDatabaseTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts">DataSafeTargetDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#timeouts DataSafeTargetDatabase#timeouts}

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.tlsConfig"></a>

```go
TlsConfig DataSafeTargetDatabaseTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#tls_config DataSafeTargetDatabase#tls_config}

---

### DataSafeTargetDatabaseConnectionOption <a name="DataSafeTargetDatabaseConnectionOption" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

&datasafetargetdatabase.DataSafeTargetDatabaseConnectionOption {
	ConnectionType: *string,
	DatasafePrivateEndpointId: *string,
	OnPremConnectorId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.property.connectionType">ConnectionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#connection_type DataSafeTargetDatabase#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.property.datasafePrivateEndpointId">DatasafePrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#datasafe_private_endpoint_id DataSafeTargetDatabase#datasafe_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.property.onPremConnectorId">OnPremConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#on_prem_connector_id DataSafeTargetDatabase#on_prem_connector_id}. |

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.property.connectionType"></a>

```go
ConnectionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#connection_type DataSafeTargetDatabase#connection_type}.

---

##### `DatasafePrivateEndpointId`<sup>Optional</sup> <a name="DatasafePrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.property.datasafePrivateEndpointId"></a>

```go
DatasafePrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#datasafe_private_endpoint_id DataSafeTargetDatabase#datasafe_private_endpoint_id}.

---

##### `OnPremConnectorId`<sup>Optional</sup> <a name="OnPremConnectorId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.property.onPremConnectorId"></a>

```go
OnPremConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#on_prem_connector_id DataSafeTargetDatabase#on_prem_connector_id}.

---

### DataSafeTargetDatabaseCredentials <a name="DataSafeTargetDatabaseCredentials" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

&datasafetargetdatabase.DataSafeTargetDatabaseCredentials {
	Password: *string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#password DataSafeTargetDatabase#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#user_name DataSafeTargetDatabase#user_name}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#password DataSafeTargetDatabase#password}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#user_name DataSafeTargetDatabase#user_name}.

---

### DataSafeTargetDatabaseDatabaseDetails <a name="DataSafeTargetDatabaseDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

&datasafetargetdatabase.DataSafeTargetDatabaseDatabaseDetails {
	DatabaseType: *string,
	InfrastructureType: *string,
	AutonomousDatabaseId: *string,
	DbSystemId: *string,
	InstanceId: *string,
	IpAddresses: *[]*string,
	ListenerPort: *f64,
	ServiceName: *string,
	VmClusterId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.databaseType">DatabaseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#database_type DataSafeTargetDatabase#database_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#infrastructure_type DataSafeTargetDatabase#infrastructure_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#autonomous_database_id DataSafeTargetDatabase#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#db_system_id DataSafeTargetDatabase#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#instance_id DataSafeTargetDatabase#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#ip_addresses DataSafeTargetDatabase#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#listener_port DataSafeTargetDatabase#listener_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#service_name DataSafeTargetDatabase#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#vm_cluster_id DataSafeTargetDatabase#vm_cluster_id}. |

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.databaseType"></a>

```go
DatabaseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#database_type DataSafeTargetDatabase#database_type}.

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.infrastructureType"></a>

```go
InfrastructureType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#infrastructure_type DataSafeTargetDatabase#infrastructure_type}.

---

##### `AutonomousDatabaseId`<sup>Optional</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.autonomousDatabaseId"></a>

```go
AutonomousDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#autonomous_database_id DataSafeTargetDatabase#autonomous_database_id}.

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.dbSystemId"></a>

```go
DbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#db_system_id DataSafeTargetDatabase#db_system_id}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#instance_id DataSafeTargetDatabase#instance_id}.

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.ipAddresses"></a>

```go
IpAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#ip_addresses DataSafeTargetDatabase#ip_addresses}.

---

##### `ListenerPort`<sup>Optional</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.listenerPort"></a>

```go
ListenerPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#listener_port DataSafeTargetDatabase#listener_port}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#service_name DataSafeTargetDatabase#service_name}.

---

##### `VmClusterId`<sup>Optional</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.vmClusterId"></a>

```go
VmClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#vm_cluster_id DataSafeTargetDatabase#vm_cluster_id}.

---

### DataSafeTargetDatabasePeerTargetDatabaseDetails <a name="DataSafeTargetDatabasePeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

&datasafetargetdatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails {
	DatabaseDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails,
	DataguardAssociationId: *string,
	Description: *string,
	DisplayName: *string,
	TlsConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a></code> | database_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.dataguardAssociationId">DataguardAssociationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#dataguard_association_id DataSafeTargetDatabase#dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#description DataSafeTargetDatabase#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#display_name DataSafeTargetDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a></code> | tls_config block. |

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.databaseDetails"></a>

```go
DatabaseDetails DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a>

database_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#database_details DataSafeTargetDatabase#database_details}

---

##### `DataguardAssociationId`<sup>Optional</sup> <a name="DataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.dataguardAssociationId"></a>

```go
DataguardAssociationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#dataguard_association_id DataSafeTargetDatabase#dataguard_association_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#description DataSafeTargetDatabase#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#display_name DataSafeTargetDatabase#display_name}.

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.tlsConfig"></a>

```go
TlsConfig DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#tls_config DataSafeTargetDatabase#tls_config}

---

### DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails <a name="DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

&datasafetargetdatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails {
	DatabaseType: *string,
	InfrastructureType: *string,
	AutonomousDatabaseId: *string,
	DbSystemId: *string,
	InstanceId: *string,
	IpAddresses: *[]*string,
	ListenerPort: *f64,
	ServiceName: *string,
	VmClusterId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.databaseType">DatabaseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#database_type DataSafeTargetDatabase#database_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#infrastructure_type DataSafeTargetDatabase#infrastructure_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#autonomous_database_id DataSafeTargetDatabase#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#db_system_id DataSafeTargetDatabase#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#instance_id DataSafeTargetDatabase#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#ip_addresses DataSafeTargetDatabase#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#listener_port DataSafeTargetDatabase#listener_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#service_name DataSafeTargetDatabase#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#vm_cluster_id DataSafeTargetDatabase#vm_cluster_id}. |

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.databaseType"></a>

```go
DatabaseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#database_type DataSafeTargetDatabase#database_type}.

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.infrastructureType"></a>

```go
InfrastructureType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#infrastructure_type DataSafeTargetDatabase#infrastructure_type}.

---

##### `AutonomousDatabaseId`<sup>Optional</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.autonomousDatabaseId"></a>

```go
AutonomousDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#autonomous_database_id DataSafeTargetDatabase#autonomous_database_id}.

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.dbSystemId"></a>

```go
DbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#db_system_id DataSafeTargetDatabase#db_system_id}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#instance_id DataSafeTargetDatabase#instance_id}.

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.ipAddresses"></a>

```go
IpAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#ip_addresses DataSafeTargetDatabase#ip_addresses}.

---

##### `ListenerPort`<sup>Optional</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.listenerPort"></a>

```go
ListenerPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#listener_port DataSafeTargetDatabase#listener_port}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#service_name DataSafeTargetDatabase#service_name}.

---

##### `VmClusterId`<sup>Optional</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.vmClusterId"></a>

```go
VmClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#vm_cluster_id DataSafeTargetDatabase#vm_cluster_id}.

---

### DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig <a name="DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

&datasafetargetdatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig {
	Status: *string,
	CertificateStoreType: *string,
	KeyStoreContent: *string,
	StorePassword: *string,
	TrustStoreContent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#status DataSafeTargetDatabase#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.certificateStoreType">CertificateStoreType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#certificate_store_type DataSafeTargetDatabase#certificate_store_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.keyStoreContent">KeyStoreContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#key_store_content DataSafeTargetDatabase#key_store_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.storePassword">StorePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#store_password DataSafeTargetDatabase#store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.trustStoreContent">TrustStoreContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#trust_store_content DataSafeTargetDatabase#trust_store_content}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#status DataSafeTargetDatabase#status}.

---

##### `CertificateStoreType`<sup>Optional</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.certificateStoreType"></a>

```go
CertificateStoreType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#certificate_store_type DataSafeTargetDatabase#certificate_store_type}.

---

##### `KeyStoreContent`<sup>Optional</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.keyStoreContent"></a>

```go
KeyStoreContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#key_store_content DataSafeTargetDatabase#key_store_content}.

---

##### `StorePassword`<sup>Optional</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.storePassword"></a>

```go
StorePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#store_password DataSafeTargetDatabase#store_password}.

---

##### `TrustStoreContent`<sup>Optional</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.trustStoreContent"></a>

```go
TrustStoreContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#trust_store_content DataSafeTargetDatabase#trust_store_content}.

---

### DataSafeTargetDatabasePeerTargetDatabases <a name="DataSafeTargetDatabasePeerTargetDatabases" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabases.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

&datasafetargetdatabase.DataSafeTargetDatabasePeerTargetDatabases {

}
```


### DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails <a name="DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

&datasafetargetdatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails {

}
```


### DataSafeTargetDatabasePeerTargetDatabasesTlsConfig <a name="DataSafeTargetDatabasePeerTargetDatabasesTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

&datasafetargetdatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfig {

}
```


### DataSafeTargetDatabaseTimeouts <a name="DataSafeTargetDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

&datasafetargetdatabase.DataSafeTargetDatabaseTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#create DataSafeTargetDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#delete DataSafeTargetDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#update DataSafeTargetDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#create DataSafeTargetDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#delete DataSafeTargetDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#update DataSafeTargetDatabase#update}.

---

### DataSafeTargetDatabaseTlsConfig <a name="DataSafeTargetDatabaseTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

&datasafetargetdatabase.DataSafeTargetDatabaseTlsConfig {
	Status: *string,
	CertificateStoreType: *string,
	KeyStoreContent: *string,
	StorePassword: *string,
	TrustStoreContent: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#status DataSafeTargetDatabase#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.certificateStoreType">CertificateStoreType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#certificate_store_type DataSafeTargetDatabase#certificate_store_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.keyStoreContent">KeyStoreContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#key_store_content DataSafeTargetDatabase#key_store_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.storePassword">StorePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#store_password DataSafeTargetDatabase#store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.trustStoreContent">TrustStoreContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#trust_store_content DataSafeTargetDatabase#trust_store_content}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#status DataSafeTargetDatabase#status}.

---

##### `CertificateStoreType`<sup>Optional</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.certificateStoreType"></a>

```go
CertificateStoreType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#certificate_store_type DataSafeTargetDatabase#certificate_store_type}.

---

##### `KeyStoreContent`<sup>Optional</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.keyStoreContent"></a>

```go
KeyStoreContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#key_store_content DataSafeTargetDatabase#key_store_content}.

---

##### `StorePassword`<sup>Optional</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.storePassword"></a>

```go
StorePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#store_password DataSafeTargetDatabase#store_password}.

---

##### `TrustStoreContent`<sup>Optional</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.trustStoreContent"></a>

```go
TrustStoreContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#trust_store_content DataSafeTargetDatabase#trust_store_content}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeTargetDatabaseConnectionOptionOutputReference <a name="DataSafeTargetDatabaseConnectionOptionOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabaseConnectionOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeTargetDatabaseConnectionOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resetDatasafePrivateEndpointId">ResetDatasafePrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resetOnPremConnectorId">ResetOnPremConnectorId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasafePrivateEndpointId` <a name="ResetDatasafePrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resetDatasafePrivateEndpointId"></a>

```go
func ResetDatasafePrivateEndpointId()
```

##### `ResetOnPremConnectorId` <a name="ResetOnPremConnectorId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resetOnPremConnectorId"></a>

```go
func ResetOnPremConnectorId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.datasafePrivateEndpointIdInput">DatasafePrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.onPremConnectorIdInput">OnPremConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.datasafePrivateEndpointId">DatasafePrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.onPremConnectorId">OnPremConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.connectionTypeInput"></a>

```go
func ConnectionTypeInput() *string
```

- *Type:* *string

---

##### `DatasafePrivateEndpointIdInput`<sup>Optional</sup> <a name="DatasafePrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.datasafePrivateEndpointIdInput"></a>

```go
func DatasafePrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `OnPremConnectorIdInput`<sup>Optional</sup> <a name="OnPremConnectorIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.onPremConnectorIdInput"></a>

```go
func OnPremConnectorIdInput() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `DatasafePrivateEndpointId`<sup>Required</sup> <a name="DatasafePrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.datasafePrivateEndpointId"></a>

```go
func DatasafePrivateEndpointId() *string
```

- *Type:* *string

---

##### `OnPremConnectorId`<sup>Required</sup> <a name="OnPremConnectorId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.onPremConnectorId"></a>

```go
func OnPremConnectorId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSafeTargetDatabaseConnectionOption
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a>

---


### DataSafeTargetDatabaseCredentialsOutputReference <a name="DataSafeTargetDatabaseCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabaseCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeTargetDatabaseCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSafeTargetDatabaseCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a>

---


### DataSafeTargetDatabaseDatabaseDetailsOutputReference <a name="DataSafeTargetDatabaseDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabaseDatabaseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeTargetDatabaseDatabaseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetAutonomousDatabaseId">ResetAutonomousDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetListenerPort">ResetListenerPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetVmClusterId">ResetVmClusterId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutonomousDatabaseId` <a name="ResetAutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetAutonomousDatabaseId"></a>

```go
func ResetAutonomousDatabaseId()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetDbSystemId"></a>

```go
func ResetDbSystemId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetIpAddresses"></a>

```go
func ResetIpAddresses()
```

##### `ResetListenerPort` <a name="ResetListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetListenerPort"></a>

```go
func ResetListenerPort()
```

##### `ResetServiceName` <a name="ResetServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetVmClusterId` <a name="ResetVmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetVmClusterId"></a>

```go
func ResetVmClusterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.databaseTypeInput">DatabaseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureTypeInput">InfrastructureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.ipAddressesInput">IpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.listenerPortInput">ListenerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterIdInput">VmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseIdInput"></a>

```go
func AutonomousDatabaseIdInput() *string
```

- *Type:* *string

---

##### `DatabaseTypeInput`<sup>Optional</sup> <a name="DatabaseTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.databaseTypeInput"></a>

```go
func DatabaseTypeInput() *string
```

- *Type:* *string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemIdInput"></a>

```go
func DbSystemIdInput() *string
```

- *Type:* *string

---

##### `InfrastructureTypeInput`<sup>Optional</sup> <a name="InfrastructureTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureTypeInput"></a>

```go
func InfrastructureTypeInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.ipAddressesInput"></a>

```go
func IpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerPortInput`<sup>Optional</sup> <a name="ListenerPortInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.listenerPortInput"></a>

```go
func ListenerPortInput() *f64
```

- *Type:* *f64

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `VmClusterIdInput`<sup>Optional</sup> <a name="VmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterIdInput"></a>

```go
func VmClusterIdInput() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureType"></a>

```go
func InfrastructureType() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterId"></a>

```go
func VmClusterId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSafeTargetDatabaseDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a>

---


### DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference <a name="DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetAutonomousDatabaseId">ResetAutonomousDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetListenerPort">ResetListenerPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetVmClusterId">ResetVmClusterId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutonomousDatabaseId` <a name="ResetAutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetAutonomousDatabaseId"></a>

```go
func ResetAutonomousDatabaseId()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetDbSystemId"></a>

```go
func ResetDbSystemId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetIpAddresses"></a>

```go
func ResetIpAddresses()
```

##### `ResetListenerPort` <a name="ResetListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetListenerPort"></a>

```go
func ResetListenerPort()
```

##### `ResetServiceName` <a name="ResetServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetVmClusterId` <a name="ResetVmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetVmClusterId"></a>

```go
func ResetVmClusterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseTypeInput">DatabaseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureTypeInput">InfrastructureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddressesInput">IpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPortInput">ListenerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterIdInput">VmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseIdInput"></a>

```go
func AutonomousDatabaseIdInput() *string
```

- *Type:* *string

---

##### `DatabaseTypeInput`<sup>Optional</sup> <a name="DatabaseTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseTypeInput"></a>

```go
func DatabaseTypeInput() *string
```

- *Type:* *string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemIdInput"></a>

```go
func DbSystemIdInput() *string
```

- *Type:* *string

---

##### `InfrastructureTypeInput`<sup>Optional</sup> <a name="InfrastructureTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureTypeInput"></a>

```go
func InfrastructureTypeInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddressesInput"></a>

```go
func IpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerPortInput`<sup>Optional</sup> <a name="ListenerPortInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPortInput"></a>

```go
func ListenerPortInput() *f64
```

- *Type:* *f64

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `VmClusterIdInput`<sup>Optional</sup> <a name="VmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterIdInput"></a>

```go
func VmClusterIdInput() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureType"></a>

```go
func InfrastructureType() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterId"></a>

```go
func VmClusterId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a>

---


### DataSafeTargetDatabasePeerTargetDatabaseDetailsList <a name="DataSafeTargetDatabasePeerTargetDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabasePeerTargetDatabaseDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeTargetDatabasePeerTargetDatabaseDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.get"></a>

```go
func Get(index *f64) DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference <a name="DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.putDatabaseDetails">PutDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetDataguardAssociationId">ResetDataguardAssociationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabaseDetails` <a name="PutDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.putDatabaseDetails"></a>

```go
func PutDatabaseDetails(value DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.putDatabaseDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.putTlsConfig"></a>

```go
func PutTlsConfig(value DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a>

---

##### `ResetDataguardAssociationId` <a name="ResetDataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetDataguardAssociationId"></a>

```go
func ResetDataguardAssociationId()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetTlsConfig"></a>

```go
func ResetTlsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.databaseDetailsInput">DatabaseDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationIdInput">DataguardAssociationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationId">DataguardAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.databaseDetails"></a>

```go
func DatabaseDetails() DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference</a>

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.tlsConfig"></a>

```go
func TlsConfig() DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference</a>

---

##### `DatabaseDetailsInput`<sup>Optional</sup> <a name="DatabaseDetailsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.databaseDetailsInput"></a>

```go
func DatabaseDetailsInput() DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a>

---

##### `DataguardAssociationIdInput`<sup>Optional</sup> <a name="DataguardAssociationIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationIdInput"></a>

```go
func DataguardAssociationIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.tlsConfigInput"></a>

```go
func TlsConfigInput() DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a>

---

##### `DataguardAssociationId`<sup>Required</sup> <a name="DataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationId"></a>

```go
func DataguardAssociationId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference <a name="DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetCertificateStoreType">ResetCertificateStoreType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetKeyStoreContent">ResetKeyStoreContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetStorePassword">ResetStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetTrustStoreContent">ResetTrustStoreContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateStoreType` <a name="ResetCertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetCertificateStoreType"></a>

```go
func ResetCertificateStoreType()
```

##### `ResetKeyStoreContent` <a name="ResetKeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetKeyStoreContent"></a>

```go
func ResetKeyStoreContent()
```

##### `ResetStorePassword` <a name="ResetStorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetStorePassword"></a>

```go
func ResetStorePassword()
```

##### `ResetTrustStoreContent` <a name="ResetTrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetTrustStoreContent"></a>

```go
func ResetTrustStoreContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreTypeInput">CertificateStoreTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContentInput">KeyStoreContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePasswordInput">StorePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContentInput">TrustStoreContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreType">CertificateStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContent">KeyStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePassword">StorePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContent">TrustStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateStoreTypeInput`<sup>Optional</sup> <a name="CertificateStoreTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreTypeInput"></a>

```go
func CertificateStoreTypeInput() *string
```

- *Type:* *string

---

##### `KeyStoreContentInput`<sup>Optional</sup> <a name="KeyStoreContentInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContentInput"></a>

```go
func KeyStoreContentInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `StorePasswordInput`<sup>Optional</sup> <a name="StorePasswordInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePasswordInput"></a>

```go
func StorePasswordInput() *string
```

- *Type:* *string

---

##### `TrustStoreContentInput`<sup>Optional</sup> <a name="TrustStoreContentInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContentInput"></a>

```go
func TrustStoreContentInput() *string
```

- *Type:* *string

---

##### `CertificateStoreType`<sup>Required</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreType"></a>

```go
func CertificateStoreType() *string
```

- *Type:* *string

---

##### `KeyStoreContent`<sup>Required</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContent"></a>

```go
func KeyStoreContent() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorePassword`<sup>Required</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePassword"></a>

```go
func StorePassword() *string
```

- *Type:* *string

---

##### `TrustStoreContent`<sup>Required</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContent"></a>

```go
func TrustStoreContent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a>

---


### DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList <a name="DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.get"></a>

```go
func Get(index *f64) DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference <a name="DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.infrastructureType"></a>

```go
func InfrastructureType() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.vmClusterId"></a>

```go
func VmClusterId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails</a>

---


### DataSafeTargetDatabasePeerTargetDatabasesList <a name="DataSafeTargetDatabasePeerTargetDatabasesList" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabasePeerTargetDatabasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeTargetDatabasePeerTargetDatabasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.get"></a>

```go
func Get(index *f64) DataSafeTargetDatabasePeerTargetDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSafeTargetDatabasePeerTargetDatabasesOutputReference <a name="DataSafeTargetDatabasePeerTargetDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabasePeerTargetDatabasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeTargetDatabasePeerTargetDatabasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList">DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseUniqueName">DatabaseUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.dataguardAssociationId">DataguardAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.key">Key</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList">DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabases">DataSafeTargetDatabasePeerTargetDatabases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseDetails"></a>

```go
func DatabaseDetails() DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList">DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList</a>

---

##### `DatabaseUniqueName`<sup>Required</sup> <a name="DatabaseUniqueName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseUniqueName"></a>

```go
func DatabaseUniqueName() *string
```

- *Type:* *string

---

##### `DataguardAssociationId`<sup>Required</sup> <a name="DataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.dataguardAssociationId"></a>

```go
func DataguardAssociationId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.key"></a>

```go
func Key() *f64
```

- *Type:* *f64

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.tlsConfig"></a>

```go
func TlsConfig() DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList">DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSafeTargetDatabasePeerTargetDatabases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabases">DataSafeTargetDatabasePeerTargetDatabases</a>

---


### DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList <a name="DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabasePeerTargetDatabasesTlsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.get"></a>

```go
func Get(index *f64) DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference <a name="DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.certificateStoreType">CertificateStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.keyStoreContent">KeyStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.storePassword">StorePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.trustStoreContent">TrustStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfig">DataSafeTargetDatabasePeerTargetDatabasesTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateStoreType`<sup>Required</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.certificateStoreType"></a>

```go
func CertificateStoreType() *string
```

- *Type:* *string

---

##### `KeyStoreContent`<sup>Required</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.keyStoreContent"></a>

```go
func KeyStoreContent() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorePassword`<sup>Required</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.storePassword"></a>

```go
func StorePassword() *string
```

- *Type:* *string

---

##### `TrustStoreContent`<sup>Required</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.trustStoreContent"></a>

```go
func TrustStoreContent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSafeTargetDatabasePeerTargetDatabasesTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfig">DataSafeTargetDatabasePeerTargetDatabasesTlsConfig</a>

---


### DataSafeTargetDatabaseTimeoutsOutputReference <a name="DataSafeTargetDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeTargetDatabaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataSafeTargetDatabaseTlsConfigOutputReference <a name="DataSafeTargetDatabaseTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafetargetdatabase"

datasafetargetdatabase.NewDataSafeTargetDatabaseTlsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeTargetDatabaseTlsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetCertificateStoreType">ResetCertificateStoreType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetKeyStoreContent">ResetKeyStoreContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetStorePassword">ResetStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetTrustStoreContent">ResetTrustStoreContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateStoreType` <a name="ResetCertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetCertificateStoreType"></a>

```go
func ResetCertificateStoreType()
```

##### `ResetKeyStoreContent` <a name="ResetKeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetKeyStoreContent"></a>

```go
func ResetKeyStoreContent()
```

##### `ResetStorePassword` <a name="ResetStorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetStorePassword"></a>

```go
func ResetStorePassword()
```

##### `ResetTrustStoreContent` <a name="ResetTrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetTrustStoreContent"></a>

```go
func ResetTrustStoreContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.certificateStoreTypeInput">CertificateStoreTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.keyStoreContentInput">KeyStoreContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.storePasswordInput">StorePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.trustStoreContentInput">TrustStoreContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.certificateStoreType">CertificateStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.keyStoreContent">KeyStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.storePassword">StorePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.trustStoreContent">TrustStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateStoreTypeInput`<sup>Optional</sup> <a name="CertificateStoreTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.certificateStoreTypeInput"></a>

```go
func CertificateStoreTypeInput() *string
```

- *Type:* *string

---

##### `KeyStoreContentInput`<sup>Optional</sup> <a name="KeyStoreContentInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.keyStoreContentInput"></a>

```go
func KeyStoreContentInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `StorePasswordInput`<sup>Optional</sup> <a name="StorePasswordInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.storePasswordInput"></a>

```go
func StorePasswordInput() *string
```

- *Type:* *string

---

##### `TrustStoreContentInput`<sup>Optional</sup> <a name="TrustStoreContentInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.trustStoreContentInput"></a>

```go
func TrustStoreContentInput() *string
```

- *Type:* *string

---

##### `CertificateStoreType`<sup>Required</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.certificateStoreType"></a>

```go
func CertificateStoreType() *string
```

- *Type:* *string

---

##### `KeyStoreContent`<sup>Required</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.keyStoreContent"></a>

```go
func KeyStoreContent() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorePassword`<sup>Required</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.storePassword"></a>

```go
func StorePassword() *string
```

- *Type:* *string

---

##### `TrustStoreContent`<sup>Required</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.trustStoreContent"></a>

```go
func TrustStoreContent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSafeTargetDatabaseTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a>

---



