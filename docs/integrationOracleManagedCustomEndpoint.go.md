# `integrationOracleManagedCustomEndpoint` Submodule <a name="`integrationOracleManagedCustomEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationOracleManagedCustomEndpoint <a name="IntegrationOracleManagedCustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint oci_integration_oracle_managed_custom_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationoraclemanagedcustomendpoint"

integrationoraclemanagedcustomendpoint.NewIntegrationOracleManagedCustomEndpoint(scope Construct, id *string, config IntegrationOracleManagedCustomEndpointConfig) IntegrationOracleManagedCustomEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig">IntegrationOracleManagedCustomEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig">IntegrationOracleManagedCustomEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsType">ResetDnsType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsZoneName">ResetDnsZoneName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetManagedType">ResetManagedType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value IntegrationOracleManagedCustomEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>

---

##### `ResetDnsType` <a name="ResetDnsType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsType"></a>

```go
func ResetDnsType()
```

##### `ResetDnsZoneName` <a name="ResetDnsZoneName" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsZoneName"></a>

```go
func ResetDnsZoneName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetManagedType` <a name="ResetManagedType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetManagedType"></a>

```go
func ResetManagedType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationOracleManagedCustomEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationoraclemanagedcustomendpoint"

integrationoraclemanagedcustomendpoint.IntegrationOracleManagedCustomEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationoraclemanagedcustomendpoint"

integrationoraclemanagedcustomendpoint.IntegrationOracleManagedCustomEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationoraclemanagedcustomendpoint"

integrationoraclemanagedcustomendpoint.IntegrationOracleManagedCustomEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationoraclemanagedcustomendpoint"

integrationoraclemanagedcustomendpoint.IntegrationOracleManagedCustomEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IntegrationOracleManagedCustomEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationOracleManagedCustomEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationOracleManagedCustomEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationOracleManagedCustomEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference">IntegrationOracleManagedCustomEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsTypeInput">DnsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneNameInput">DnsZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceIdInput">IntegrationInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedTypeInput">ManagedTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsType">DnsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneName">DnsZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceId">IntegrationInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedType">ManagedType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeouts"></a>

```go
func Timeouts() IntegrationOracleManagedCustomEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference">IntegrationOracleManagedCustomEndpointTimeoutsOutputReference</a>

---

##### `DnsTypeInput`<sup>Optional</sup> <a name="DnsTypeInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsTypeInput"></a>

```go
func DnsTypeInput() *string
```

- *Type:* *string

---

##### `DnsZoneNameInput`<sup>Optional</sup> <a name="DnsZoneNameInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneNameInput"></a>

```go
func DnsZoneNameInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationInstanceIdInput`<sup>Optional</sup> <a name="IntegrationInstanceIdInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceIdInput"></a>

```go
func IntegrationInstanceIdInput() *string
```

- *Type:* *string

---

##### `ManagedTypeInput`<sup>Optional</sup> <a name="ManagedTypeInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedTypeInput"></a>

```go
func ManagedTypeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DnsType`<sup>Required</sup> <a name="DnsType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsType"></a>

```go
func DnsType() *string
```

- *Type:* *string

---

##### `DnsZoneName`<sup>Required</sup> <a name="DnsZoneName" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneName"></a>

```go
func DnsZoneName() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationInstanceId`<sup>Required</sup> <a name="IntegrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceId"></a>

```go
func IntegrationInstanceId() *string
```

- *Type:* *string

---

##### `ManagedType`<sup>Required</sup> <a name="ManagedType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedType"></a>

```go
func ManagedType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationOracleManagedCustomEndpointConfig <a name="IntegrationOracleManagedCustomEndpointConfig" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationoraclemanagedcustomendpoint"

&integrationoraclemanagedcustomendpoint.IntegrationOracleManagedCustomEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Hostname: *string,
	IntegrationInstanceId: *string,
	DnsType: *string,
	DnsZoneName: *string,
	Id: *string,
	ManagedType: *string,
	State: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#hostname IntegrationOracleManagedCustomEndpoint#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.integrationInstanceId">IntegrationInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#integration_instance_id IntegrationOracleManagedCustomEndpoint#integration_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsType">DnsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_type IntegrationOracleManagedCustomEndpoint#dns_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsZoneName">DnsZoneName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_zone_name IntegrationOracleManagedCustomEndpoint#dns_zone_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#id IntegrationOracleManagedCustomEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.managedType">ManagedType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#managed_type IntegrationOracleManagedCustomEndpoint#managed_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#state IntegrationOracleManagedCustomEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#hostname IntegrationOracleManagedCustomEndpoint#hostname}.

---

##### `IntegrationInstanceId`<sup>Required</sup> <a name="IntegrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.integrationInstanceId"></a>

```go
IntegrationInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#integration_instance_id IntegrationOracleManagedCustomEndpoint#integration_instance_id}.

---

##### `DnsType`<sup>Optional</sup> <a name="DnsType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsType"></a>

```go
DnsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_type IntegrationOracleManagedCustomEndpoint#dns_type}.

---

##### `DnsZoneName`<sup>Optional</sup> <a name="DnsZoneName" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsZoneName"></a>

```go
DnsZoneName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_zone_name IntegrationOracleManagedCustomEndpoint#dns_zone_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#id IntegrationOracleManagedCustomEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedType`<sup>Optional</sup> <a name="ManagedType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.managedType"></a>

```go
ManagedType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#managed_type IntegrationOracleManagedCustomEndpoint#managed_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#state IntegrationOracleManagedCustomEndpoint#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.timeouts"></a>

```go
Timeouts IntegrationOracleManagedCustomEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#timeouts IntegrationOracleManagedCustomEndpoint#timeouts}

---

### IntegrationOracleManagedCustomEndpointTimeouts <a name="IntegrationOracleManagedCustomEndpointTimeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationoraclemanagedcustomendpoint"

&integrationoraclemanagedcustomendpoint.IntegrationOracleManagedCustomEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#create IntegrationOracleManagedCustomEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#delete IntegrationOracleManagedCustomEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#update IntegrationOracleManagedCustomEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#create IntegrationOracleManagedCustomEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#delete IntegrationOracleManagedCustomEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#update IntegrationOracleManagedCustomEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationOracleManagedCustomEndpointTimeoutsOutputReference <a name="IntegrationOracleManagedCustomEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/integrationoraclemanagedcustomendpoint"

integrationoraclemanagedcustomendpoint.NewIntegrationOracleManagedCustomEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IntegrationOracleManagedCustomEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



