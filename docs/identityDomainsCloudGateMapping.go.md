# `identityDomainsCloudGateMapping` Submodule <a name="`identityDomainsCloudGateMapping` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsCloudGateMapping <a name="IdentityDomainsCloudGateMapping" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping oci_identity_domains_cloud_gate_mapping}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMapping(scope Construct, id *string, config IdentityDomainsCloudGateMappingConfig) IdentityDomainsCloudGateMapping
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig">IdentityDomainsCloudGateMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig">IdentityDomainsCloudGateMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putCloudGate">PutCloudGate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putGatewayApp">PutGatewayApp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putServer">PutServer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putUpstreamServerGroup">PutUpstreamServerGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetNginxSettings">ResetNginxSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetProxyPass">ResetProxyPass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetUpstreamServerGroup">ResetUpstreamServerGroup</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudGate` <a name="PutCloudGate" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putCloudGate"></a>

```go
func PutCloudGate(value IdentityDomainsCloudGateMappingCloudGate)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putCloudGate.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a>

---

##### `PutGatewayApp` <a name="PutGatewayApp" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putGatewayApp"></a>

```go
func PutGatewayApp(value IdentityDomainsCloudGateMappingGatewayApp)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putGatewayApp.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a>

---

##### `PutServer` <a name="PutServer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putServer"></a>

```go
func PutServer(value IdentityDomainsCloudGateMappingServer)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putServer.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a>

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTimeouts"></a>

```go
func PutTimeouts(value IdentityDomainsCloudGateMappingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts">IdentityDomainsCloudGateMappingTimeouts</a>

---

##### `PutUpstreamServerGroup` <a name="PutUpstreamServerGroup" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putUpstreamServerGroup"></a>

```go
func PutUpstreamServerGroup(value IdentityDomainsCloudGateMappingUpstreamServerGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.putUpstreamServerGroup.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetNginxSettings` <a name="ResetNginxSettings" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetNginxSettings"></a>

```go
func ResetNginxSettings()
```

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetOcid"></a>

```go
func ResetOcid()
```

##### `ResetProxyPass` <a name="ResetProxyPass" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetProxyPass"></a>

```go
func ResetProxyPass()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpstreamServerGroup` <a name="ResetUpstreamServerGroup" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.resetUpstreamServerGroup"></a>

```go
func ResetUpstreamServerGroup()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsCloudGateMapping resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.IdentityDomainsCloudGateMapping_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.IdentityDomainsCloudGateMapping_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.IdentityDomainsCloudGateMapping_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.IdentityDomainsCloudGateMapping_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdentityDomainsCloudGateMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityDomainsCloudGateMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityDomainsCloudGateMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsCloudGateMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.cloudGate">CloudGate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference">IdentityDomainsCloudGateMappingCloudGateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.gatewayApp">GatewayApp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference">IdentityDomainsCloudGateMappingGatewayAppOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList">IdentityDomainsCloudGateMappingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList">IdentityDomainsCloudGateMappingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.isOpcService">IsOpcService</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList">IdentityDomainsCloudGateMappingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.server">Server</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference">IdentityDomainsCloudGateMappingServerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList">IdentityDomainsCloudGateMappingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference">IdentityDomainsCloudGateMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.upstreamServerGroup">UpstreamServerGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference">IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.cloudGateInput">CloudGateInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.gatewayAppInput">GatewayAppInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.nginxSettingsInput">NginxSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.ocidInput">OcidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.policyNameInput">PolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.proxyPassInput">ProxyPassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourcePrefixInput">ResourcePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.schemasInput">SchemasInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.serverInput">ServerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.upstreamServerGroupInput">UpstreamServerGroupInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.nginxSettings">NginxSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.proxyPass">ProxyPass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourcePrefix">ResourcePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudGate`<sup>Required</sup> <a name="CloudGate" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.cloudGate"></a>

```go
func CloudGate() IdentityDomainsCloudGateMappingCloudGateOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference">IdentityDomainsCloudGateMappingCloudGateOutputReference</a>

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `GatewayApp`<sup>Required</sup> <a name="GatewayApp" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.gatewayApp"></a>

```go
func GatewayApp() IdentityDomainsCloudGateMappingGatewayAppOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference">IdentityDomainsCloudGateMappingGatewayAppOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() IdentityDomainsCloudGateMappingIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList">IdentityDomainsCloudGateMappingIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() IdentityDomainsCloudGateMappingIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList">IdentityDomainsCloudGateMappingIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `IsOpcService`<sup>Required</sup> <a name="IsOpcService" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.isOpcService"></a>

```go
func IsOpcService() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.meta"></a>

```go
func Meta() IdentityDomainsCloudGateMappingMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList">IdentityDomainsCloudGateMappingMetaList</a>

---

##### `Server`<sup>Required</sup> <a name="Server" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.server"></a>

```go
func Server() IdentityDomainsCloudGateMappingServerOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference">IdentityDomainsCloudGateMappingServerOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tags"></a>

```go
func Tags() IdentityDomainsCloudGateMappingTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList">IdentityDomainsCloudGateMappingTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.timeouts"></a>

```go
func Timeouts() IdentityDomainsCloudGateMappingTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference">IdentityDomainsCloudGateMappingTimeoutsOutputReference</a>

---

##### `UpstreamServerGroup`<sup>Required</sup> <a name="UpstreamServerGroup" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.upstreamServerGroup"></a>

```go
func UpstreamServerGroup() IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference">IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference</a>

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CloudGateInput`<sup>Optional</sup> <a name="CloudGateInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.cloudGateInput"></a>

```go
func CloudGateInput() IdentityDomainsCloudGateMappingCloudGate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GatewayAppInput`<sup>Optional</sup> <a name="GatewayAppInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.gatewayAppInput"></a>

```go
func GatewayAppInput() IdentityDomainsCloudGateMappingGatewayApp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a>

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `NginxSettingsInput`<sup>Optional</sup> <a name="NginxSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.nginxSettingsInput"></a>

```go
func NginxSettingsInput() *string
```

- *Type:* *string

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.ocidInput"></a>

```go
func OcidInput() *string
```

- *Type:* *string

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.policyNameInput"></a>

```go
func PolicyNameInput() *string
```

- *Type:* *string

---

##### `ProxyPassInput`<sup>Optional</sup> <a name="ProxyPassInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.proxyPassInput"></a>

```go
func ProxyPassInput() *string
```

- *Type:* *string

---

##### `ResourcePrefixInput`<sup>Optional</sup> <a name="ResourcePrefixInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourcePrefixInput"></a>

```go
func ResourcePrefixInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.schemasInput"></a>

```go
func SchemasInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.serverInput"></a>

```go
func ServerInput() IdentityDomainsCloudGateMappingServer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpstreamServerGroupInput`<sup>Optional</sup> <a name="UpstreamServerGroupInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.upstreamServerGroupInput"></a>

```go
func UpstreamServerGroupInput() IdentityDomainsCloudGateMappingUpstreamServerGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `NginxSettings`<sup>Required</sup> <a name="NginxSettings" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.nginxSettings"></a>

```go
func NginxSettings() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `ProxyPass`<sup>Required</sup> <a name="ProxyPass" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.proxyPass"></a>

```go
func ProxyPass() *string
```

- *Type:* *string

---

##### `ResourcePrefix`<sup>Required</sup> <a name="ResourcePrefix" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourcePrefix"></a>

```go
func ResourcePrefix() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMapping.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsCloudGateMappingCloudGate <a name="IdentityDomainsCloudGateMappingCloudGate" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

&identitydomainscloudgatemapping.IdentityDomainsCloudGateMappingCloudGate {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

### IdentityDomainsCloudGateMappingConfig <a name="IdentityDomainsCloudGateMappingConfig" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

&identitydomainscloudgatemapping.IdentityDomainsCloudGateMappingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudGate: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate,
	GatewayApp: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp,
	IdcsEndpoint: *string,
	PolicyName: *string,
	ResourcePrefix: *string,
	Schemas: *[]*string,
	Server: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer,
	Attributes: *string,
	AttributeSets: *[]*string,
	Authorization: *string,
	Description: *string,
	NginxSettings: *string,
	Ocid: *string,
	ProxyPass: *string,
	ResourceTypeSchemaVersion: *string,
	Tags: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts,
	UpstreamServerGroup: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.cloudGate">CloudGate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a></code> | cloud_gate block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.gatewayApp">GatewayApp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a></code> | gateway_app block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#idcs_endpoint IdentityDomainsCloudGateMapping#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.policyName">PolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#policy_name IdentityDomainsCloudGateMapping#policy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.resourcePrefix">ResourcePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#resource_prefix IdentityDomainsCloudGateMapping#resource_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.schemas">Schemas</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#schemas IdentityDomainsCloudGateMapping#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.server">Server</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a></code> | server block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#attributes IdentityDomainsCloudGateMapping#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#attribute_sets IdentityDomainsCloudGateMapping#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#authorization IdentityDomainsCloudGateMapping#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#description IdentityDomainsCloudGateMapping#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.nginxSettings">NginxSettings</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#nginx_settings IdentityDomainsCloudGateMapping#nginx_settings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.ocid">Ocid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#ocid IdentityDomainsCloudGateMapping#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.proxyPass">ProxyPass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#proxy_pass IdentityDomainsCloudGateMapping#proxy_pass}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#resource_type_schema_version IdentityDomainsCloudGateMapping#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts">IdentityDomainsCloudGateMappingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.upstreamServerGroup">UpstreamServerGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a></code> | upstream_server_group block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudGate`<sup>Required</sup> <a name="CloudGate" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.cloudGate"></a>

```go
CloudGate IdentityDomainsCloudGateMappingCloudGate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a>

cloud_gate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#cloud_gate IdentityDomainsCloudGateMapping#cloud_gate}

---

##### `GatewayApp`<sup>Required</sup> <a name="GatewayApp" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.gatewayApp"></a>

```go
GatewayApp IdentityDomainsCloudGateMappingGatewayApp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a>

gateway_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#gateway_app IdentityDomainsCloudGateMapping#gateway_app}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#idcs_endpoint IdentityDomainsCloudGateMapping#idcs_endpoint}.

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.policyName"></a>

```go
PolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#policy_name IdentityDomainsCloudGateMapping#policy_name}.

---

##### `ResourcePrefix`<sup>Required</sup> <a name="ResourcePrefix" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.resourcePrefix"></a>

```go
ResourcePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#resource_prefix IdentityDomainsCloudGateMapping#resource_prefix}.

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.schemas"></a>

```go
Schemas *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#schemas IdentityDomainsCloudGateMapping#schemas}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.server"></a>

```go
Server IdentityDomainsCloudGateMappingServer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a>

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#server IdentityDomainsCloudGateMapping#server}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#attributes IdentityDomainsCloudGateMapping#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#attribute_sets IdentityDomainsCloudGateMapping#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#authorization IdentityDomainsCloudGateMapping#authorization}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#description IdentityDomainsCloudGateMapping#description}.

---

##### `NginxSettings`<sup>Optional</sup> <a name="NginxSettings" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.nginxSettings"></a>

```go
NginxSettings *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#nginx_settings IdentityDomainsCloudGateMapping#nginx_settings}.

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.ocid"></a>

```go
Ocid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#ocid IdentityDomainsCloudGateMapping#ocid}.

---

##### `ProxyPass`<sup>Optional</sup> <a name="ProxyPass" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.proxyPass"></a>

```go
ProxyPass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#proxy_pass IdentityDomainsCloudGateMapping#proxy_pass}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#resource_type_schema_version IdentityDomainsCloudGateMapping#resource_type_schema_version}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#tags IdentityDomainsCloudGateMapping#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.timeouts"></a>

```go
Timeouts IdentityDomainsCloudGateMappingTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts">IdentityDomainsCloudGateMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#timeouts IdentityDomainsCloudGateMapping#timeouts}

---

##### `UpstreamServerGroup`<sup>Optional</sup> <a name="UpstreamServerGroup" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingConfig.property.upstreamServerGroup"></a>

```go
UpstreamServerGroup IdentityDomainsCloudGateMappingUpstreamServerGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a>

upstream_server_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#upstream_server_group IdentityDomainsCloudGateMapping#upstream_server_group}

---

### IdentityDomainsCloudGateMappingGatewayApp <a name="IdentityDomainsCloudGateMappingGatewayApp" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

&identitydomainscloudgatemapping.IdentityDomainsCloudGateMappingGatewayApp {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#name IdentityDomainsCloudGateMapping#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#name IdentityDomainsCloudGateMapping#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

### IdentityDomainsCloudGateMappingIdcsCreatedBy <a name="IdentityDomainsCloudGateMappingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

&identitydomainscloudgatemapping.IdentityDomainsCloudGateMappingIdcsCreatedBy {

}
```


### IdentityDomainsCloudGateMappingIdcsLastModifiedBy <a name="IdentityDomainsCloudGateMappingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

&identitydomainscloudgatemapping.IdentityDomainsCloudGateMappingIdcsLastModifiedBy {

}
```


### IdentityDomainsCloudGateMappingMeta <a name="IdentityDomainsCloudGateMappingMeta" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

&identitydomainscloudgatemapping.IdentityDomainsCloudGateMappingMeta {

}
```


### IdentityDomainsCloudGateMappingServer <a name="IdentityDomainsCloudGateMappingServer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

&identitydomainscloudgatemapping.IdentityDomainsCloudGateMappingServer {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

### IdentityDomainsCloudGateMappingTags <a name="IdentityDomainsCloudGateMappingTags" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

&identitydomainscloudgatemapping.IdentityDomainsCloudGateMappingTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#key IdentityDomainsCloudGateMapping#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#key IdentityDomainsCloudGateMapping#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

### IdentityDomainsCloudGateMappingTimeouts <a name="IdentityDomainsCloudGateMappingTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

&identitydomainscloudgatemapping.IdentityDomainsCloudGateMappingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#create IdentityDomainsCloudGateMapping#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#delete IdentityDomainsCloudGateMapping#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#update IdentityDomainsCloudGateMapping#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#create IdentityDomainsCloudGateMapping#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#delete IdentityDomainsCloudGateMapping#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#update IdentityDomainsCloudGateMapping#update}.

---

### IdentityDomainsCloudGateMappingUpstreamServerGroup <a name="IdentityDomainsCloudGateMappingUpstreamServerGroup" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

&identitydomainscloudgatemapping.IdentityDomainsCloudGateMappingUpstreamServerGroup {
	Ssl: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup.property.ssl">Ssl</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#ssl IdentityDomainsCloudGateMapping#ssl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}. |

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup.property.ssl"></a>

```go
Ssl interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#ssl IdentityDomainsCloudGateMapping#ssl}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_cloud_gate_mapping#value IdentityDomainsCloudGateMapping#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsCloudGateMappingCloudGateOutputReference <a name="IdentityDomainsCloudGateMappingCloudGateOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMappingCloudGateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsCloudGateMappingCloudGateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGateOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsCloudGateMappingCloudGate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingCloudGate">IdentityDomainsCloudGateMappingCloudGate</a>

---


### IdentityDomainsCloudGateMappingGatewayAppOutputReference <a name="IdentityDomainsCloudGateMappingGatewayAppOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMappingGatewayAppOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsCloudGateMappingGatewayAppOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayAppOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsCloudGateMappingGatewayApp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingGatewayApp">IdentityDomainsCloudGateMappingGatewayApp</a>

---


### IdentityDomainsCloudGateMappingIdcsCreatedByList <a name="IdentityDomainsCloudGateMappingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMappingIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsCloudGateMappingIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.get"></a>

```go
func Get(index *f64) IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference <a name="IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMappingIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedBy">IdentityDomainsCloudGateMappingIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsCloudGateMappingIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsCreatedBy">IdentityDomainsCloudGateMappingIdcsCreatedBy</a>

---


### IdentityDomainsCloudGateMappingIdcsLastModifiedByList <a name="IdentityDomainsCloudGateMappingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMappingIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsCloudGateMappingIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference <a name="IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedBy">IdentityDomainsCloudGateMappingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsCloudGateMappingIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingIdcsLastModifiedBy">IdentityDomainsCloudGateMappingIdcsLastModifiedBy</a>

---


### IdentityDomainsCloudGateMappingMetaList <a name="IdentityDomainsCloudGateMappingMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMappingMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsCloudGateMappingMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.get"></a>

```go
func Get(index *f64) IdentityDomainsCloudGateMappingMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityDomainsCloudGateMappingMetaOutputReference <a name="IdentityDomainsCloudGateMappingMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMappingMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsCloudGateMappingMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMeta">IdentityDomainsCloudGateMappingMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsCloudGateMappingMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingMeta">IdentityDomainsCloudGateMappingMeta</a>

---


### IdentityDomainsCloudGateMappingServerOutputReference <a name="IdentityDomainsCloudGateMappingServerOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMappingServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsCloudGateMappingServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServerOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsCloudGateMappingServer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingServer">IdentityDomainsCloudGateMappingServer</a>

---


### IdentityDomainsCloudGateMappingTagsList <a name="IdentityDomainsCloudGateMappingTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMappingTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityDomainsCloudGateMappingTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.get"></a>

```go
func Get(index *f64) IdentityDomainsCloudGateMappingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsCloudGateMappingTagsOutputReference <a name="IdentityDomainsCloudGateMappingTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMappingTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityDomainsCloudGateMappingTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsCloudGateMappingTimeoutsOutputReference <a name="IdentityDomainsCloudGateMappingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMappingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsCloudGateMappingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference <a name="IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identitydomainscloudgatemapping"

identitydomainscloudgatemapping.NewIdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSsl` <a name="ResetSsl" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resetSsl"></a>

```go
func ResetSsl()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.sslInput">SslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.ssl">Ssl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.sslInput"></a>

```go
func SslInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.ssl"></a>

```go
func Ssl() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityDomainsCloudGateMappingUpstreamServerGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsCloudGateMapping.IdentityDomainsCloudGateMappingUpstreamServerGroup">IdentityDomainsCloudGateMappingUpstreamServerGroup</a>

---



