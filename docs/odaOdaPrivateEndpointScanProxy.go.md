# `odaOdaPrivateEndpointScanProxy` Submodule <a name="`odaOdaPrivateEndpointScanProxy` Submodule" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdaOdaPrivateEndpointScanProxy <a name="OdaOdaPrivateEndpointScanProxy" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy oci_oda_oda_private_endpoint_scan_proxy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/odaodaprivateendpointscanproxy"

odaodaprivateendpointscanproxy.NewOdaOdaPrivateEndpointScanProxy(scope Construct, id *string, config OdaOdaPrivateEndpointScanProxyConfig) OdaOdaPrivateEndpointScanProxy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig">OdaOdaPrivateEndpointScanProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig">OdaOdaPrivateEndpointScanProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putScanListenerInfos">PutScanListenerInfos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScanListenerInfos` <a name="PutScanListenerInfos" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putScanListenerInfos"></a>

```go
func PutScanListenerInfos(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putScanListenerInfos.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putTimeouts"></a>

```go
func PutTimeouts(value OdaOdaPrivateEndpointScanProxyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OdaOdaPrivateEndpointScanProxy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/odaodaprivateendpointscanproxy"

odaodaprivateendpointscanproxy.OdaOdaPrivateEndpointScanProxy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/odaodaprivateendpointscanproxy"

odaodaprivateendpointscanproxy.OdaOdaPrivateEndpointScanProxy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/odaodaprivateendpointscanproxy"

odaodaprivateendpointscanproxy.OdaOdaPrivateEndpointScanProxy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/odaodaprivateendpointscanproxy"

odaodaprivateendpointscanproxy.OdaOdaPrivateEndpointScanProxy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OdaOdaPrivateEndpointScanProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OdaOdaPrivateEndpointScanProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OdaOdaPrivateEndpointScanProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OdaOdaPrivateEndpointScanProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerInfos">ScanListenerInfos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList">OdaOdaPrivateEndpointScanProxyScanListenerInfosList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference">OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointIdInput">OdaPrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerInfosInput">ScanListenerInfosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerTypeInput">ScanListenerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointId">OdaPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerType">ScanListenerType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ScanListenerInfos`<sup>Required</sup> <a name="ScanListenerInfos" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerInfos"></a>

```go
func ScanListenerInfos() OdaOdaPrivateEndpointScanProxyScanListenerInfosList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList">OdaOdaPrivateEndpointScanProxyScanListenerInfosList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeouts"></a>

```go
func Timeouts() OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference">OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OdaPrivateEndpointIdInput`<sup>Optional</sup> <a name="OdaPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointIdInput"></a>

```go
func OdaPrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ScanListenerInfosInput`<sup>Optional</sup> <a name="ScanListenerInfosInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerInfosInput"></a>

```go
func ScanListenerInfosInput() interface{}
```

- *Type:* interface{}

---

##### `ScanListenerTypeInput`<sup>Optional</sup> <a name="ScanListenerTypeInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerTypeInput"></a>

```go
func ScanListenerTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OdaPrivateEndpointId`<sup>Required</sup> <a name="OdaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointId"></a>

```go
func OdaPrivateEndpointId() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ScanListenerType`<sup>Required</sup> <a name="ScanListenerType" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerType"></a>

```go
func ScanListenerType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OdaOdaPrivateEndpointScanProxyConfig <a name="OdaOdaPrivateEndpointScanProxyConfig" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/odaodaprivateendpointscanproxy"

&odaodaprivateendpointscanproxy.OdaOdaPrivateEndpointScanProxyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OdaPrivateEndpointId: *string,
	Protocol: *string,
	ScanListenerInfos: interface{},
	ScanListenerType: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointId">OdaPrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id OdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#protocol OdaOdaPrivateEndpointScanProxy#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.scanListenerInfos">ScanListenerInfos</a></code> | <code>interface{}</code> | scan_listener_infos block. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.scanListenerType">ScanListenerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_type OdaOdaPrivateEndpointScanProxy#scan_listener_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#id OdaOdaPrivateEndpointScanProxy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OdaPrivateEndpointId`<sup>Required</sup> <a name="OdaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointId"></a>

```go
OdaPrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id OdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#protocol OdaOdaPrivateEndpointScanProxy#protocol}.

---

##### `ScanListenerInfos`<sup>Required</sup> <a name="ScanListenerInfos" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.scanListenerInfos"></a>

```go
ScanListenerInfos interface{}
```

- *Type:* interface{}

scan_listener_infos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_infos OdaOdaPrivateEndpointScanProxy#scan_listener_infos}

---

##### `ScanListenerType`<sup>Required</sup> <a name="ScanListenerType" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.scanListenerType"></a>

```go
ScanListenerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_type OdaOdaPrivateEndpointScanProxy#scan_listener_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#id OdaOdaPrivateEndpointScanProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.timeouts"></a>

```go
Timeouts OdaOdaPrivateEndpointScanProxyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#timeouts OdaOdaPrivateEndpointScanProxy#timeouts}

---

### OdaOdaPrivateEndpointScanProxyScanListenerInfos <a name="OdaOdaPrivateEndpointScanProxyScanListenerInfos" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/odaodaprivateendpointscanproxy"

&odaodaprivateendpointscanproxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos {
	ScanListenerFqdn: *string,
	ScanListenerIp: *string,
	ScanListenerPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerFqdn">ScanListenerFqdn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_fqdn OdaOdaPrivateEndpointScanProxy#scan_listener_fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerIp">ScanListenerIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_ip OdaOdaPrivateEndpointScanProxy#scan_listener_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerPort">ScanListenerPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_port OdaOdaPrivateEndpointScanProxy#scan_listener_port}. |

---

##### `ScanListenerFqdn`<sup>Optional</sup> <a name="ScanListenerFqdn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerFqdn"></a>

```go
ScanListenerFqdn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_fqdn OdaOdaPrivateEndpointScanProxy#scan_listener_fqdn}.

---

##### `ScanListenerIp`<sup>Optional</sup> <a name="ScanListenerIp" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerIp"></a>

```go
ScanListenerIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_ip OdaOdaPrivateEndpointScanProxy#scan_listener_ip}.

---

##### `ScanListenerPort`<sup>Optional</sup> <a name="ScanListenerPort" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerPort"></a>

```go
ScanListenerPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_port OdaOdaPrivateEndpointScanProxy#scan_listener_port}.

---

### OdaOdaPrivateEndpointScanProxyTimeouts <a name="OdaOdaPrivateEndpointScanProxyTimeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/odaodaprivateendpointscanproxy"

&odaodaprivateendpointscanproxy.OdaOdaPrivateEndpointScanProxyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#create OdaOdaPrivateEndpointScanProxy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#delete OdaOdaPrivateEndpointScanProxy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#update OdaOdaPrivateEndpointScanProxy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#create OdaOdaPrivateEndpointScanProxy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#delete OdaOdaPrivateEndpointScanProxy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#update OdaOdaPrivateEndpointScanProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OdaOdaPrivateEndpointScanProxyScanListenerInfosList <a name="OdaOdaPrivateEndpointScanProxyScanListenerInfosList" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/odaodaprivateendpointscanproxy"

odaodaprivateendpointscanproxy.NewOdaOdaPrivateEndpointScanProxyScanListenerInfosList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdaOdaPrivateEndpointScanProxyScanListenerInfosList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.get"></a>

```go
func Get(index *f64) OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference <a name="OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/odaodaprivateendpointscanproxy"

odaodaprivateendpointscanproxy.NewOdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerFqdn">ResetScanListenerFqdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerIp">ResetScanListenerIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerPort">ResetScanListenerPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScanListenerFqdn` <a name="ResetScanListenerFqdn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerFqdn"></a>

```go
func ResetScanListenerFqdn()
```

##### `ResetScanListenerIp` <a name="ResetScanListenerIp" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerIp"></a>

```go
func ResetScanListenerIp()
```

##### `ResetScanListenerPort` <a name="ResetScanListenerPort" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerPort"></a>

```go
func ResetScanListenerPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdnInput">ScanListenerFqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIpInput">ScanListenerIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPortInput">ScanListenerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdn">ScanListenerFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIp">ScanListenerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPort">ScanListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScanListenerFqdnInput`<sup>Optional</sup> <a name="ScanListenerFqdnInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdnInput"></a>

```go
func ScanListenerFqdnInput() *string
```

- *Type:* *string

---

##### `ScanListenerIpInput`<sup>Optional</sup> <a name="ScanListenerIpInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIpInput"></a>

```go
func ScanListenerIpInput() *string
```

- *Type:* *string

---

##### `ScanListenerPortInput`<sup>Optional</sup> <a name="ScanListenerPortInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPortInput"></a>

```go
func ScanListenerPortInput() *f64
```

- *Type:* *f64

---

##### `ScanListenerFqdn`<sup>Required</sup> <a name="ScanListenerFqdn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdn"></a>

```go
func ScanListenerFqdn() *string
```

- *Type:* *string

---

##### `ScanListenerIp`<sup>Required</sup> <a name="ScanListenerIp" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIp"></a>

```go
func ScanListenerIp() *string
```

- *Type:* *string

---

##### `ScanListenerPort`<sup>Required</sup> <a name="ScanListenerPort" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPort"></a>

```go
func ScanListenerPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference <a name="OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/odaodaprivateendpointscanproxy"

odaodaprivateendpointscanproxy.NewOdaOdaPrivateEndpointScanProxyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



