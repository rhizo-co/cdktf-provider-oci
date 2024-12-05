# `dnsZonePromoteDnssecKeyVersion` Submodule <a name="`dnsZonePromoteDnssecKeyVersion` Submodule" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsZonePromoteDnssecKeyVersion <a name="DnsZonePromoteDnssecKeyVersion" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version oci_dns_zone_promote_dnssec_key_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnszonepromotednsseckeyversion"

dnszonepromotednsseckeyversion.NewDnsZonePromoteDnssecKeyVersion(scope Construct, id *string, config DnsZonePromoteDnssecKeyVersionConfig) DnsZonePromoteDnssecKeyVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig">DnsZonePromoteDnssecKeyVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig">DnsZonePromoteDnssecKeyVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.putTimeouts"></a>

```go
func PutTimeouts(value DnsZonePromoteDnssecKeyVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeouts">DnsZonePromoteDnssecKeyVersionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetScope` <a name="ResetScope" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsZonePromoteDnssecKeyVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnszonepromotednsseckeyversion"

dnszonepromotednsseckeyversion.DnsZonePromoteDnssecKeyVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnszonepromotednsseckeyversion"

dnszonepromotednsseckeyversion.DnsZonePromoteDnssecKeyVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnszonepromotednsseckeyversion"

dnszonepromotednsseckeyversion.DnsZonePromoteDnssecKeyVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnszonepromotednsseckeyversion"

dnszonepromotednsseckeyversion.DnsZonePromoteDnssecKeyVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DnsZonePromoteDnssecKeyVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DnsZonePromoteDnssecKeyVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DnsZonePromoteDnssecKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DnsZonePromoteDnssecKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference">DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.dnssecKeyVersionUuidInput">DnssecKeyVersionUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.dnssecKeyVersionUuid">DnssecKeyVersionUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.timeouts"></a>

```go
func Timeouts() DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference">DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference</a>

---

##### `DnssecKeyVersionUuidInput`<sup>Optional</sup> <a name="DnssecKeyVersionUuidInput" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.dnssecKeyVersionUuidInput"></a>

```go
func DnssecKeyVersionUuidInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `DnssecKeyVersionUuid`<sup>Required</sup> <a name="DnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.dnssecKeyVersionUuid"></a>

```go
func DnssecKeyVersionUuid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsZonePromoteDnssecKeyVersionConfig <a name="DnsZonePromoteDnssecKeyVersionConfig" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnszonepromotednsseckeyversion"

&dnszonepromotednsseckeyversion.DnsZonePromoteDnssecKeyVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DnssecKeyVersionUuid: *string,
	ZoneId: *string,
	Id: *string,
	Scope: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.dnssecKeyVersionUuid">DnssecKeyVersionUuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#dnssec_key_version_uuid DnsZonePromoteDnssecKeyVersion#dnssec_key_version_uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#zone_id DnsZonePromoteDnssecKeyVersion#zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#id DnsZonePromoteDnssecKeyVersion#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#scope DnsZonePromoteDnssecKeyVersion#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeouts">DnsZonePromoteDnssecKeyVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnssecKeyVersionUuid`<sup>Required</sup> <a name="DnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.dnssecKeyVersionUuid"></a>

```go
DnssecKeyVersionUuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#dnssec_key_version_uuid DnsZonePromoteDnssecKeyVersion#dnssec_key_version_uuid}.

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#zone_id DnsZonePromoteDnssecKeyVersion#zone_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#id DnsZonePromoteDnssecKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#scope DnsZonePromoteDnssecKeyVersion#scope}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionConfig.property.timeouts"></a>

```go
Timeouts DnsZonePromoteDnssecKeyVersionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeouts">DnsZonePromoteDnssecKeyVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#timeouts DnsZonePromoteDnssecKeyVersion#timeouts}

---

### DnsZonePromoteDnssecKeyVersionTimeouts <a name="DnsZonePromoteDnssecKeyVersionTimeouts" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnszonepromotednsseckeyversion"

&dnszonepromotednsseckeyversion.DnsZonePromoteDnssecKeyVersionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#create DnsZonePromoteDnssecKeyVersion#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#delete DnsZonePromoteDnssecKeyVersion#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#update DnsZonePromoteDnssecKeyVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#create DnsZonePromoteDnssecKeyVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#delete DnsZonePromoteDnssecKeyVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_promote_dnssec_key_version#update DnsZonePromoteDnssecKeyVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference <a name="DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnszonepromotednsseckeyversion"

dnszonepromotednsseckeyversion.NewDnsZonePromoteDnssecKeyVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsZonePromoteDnssecKeyVersion.DnsZonePromoteDnssecKeyVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



