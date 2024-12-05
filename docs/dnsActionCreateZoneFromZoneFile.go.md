# `dnsActionCreateZoneFromZoneFile` Submodule <a name="`dnsActionCreateZoneFromZoneFile` Submodule" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsActionCreateZoneFromZoneFile <a name="DnsActionCreateZoneFromZoneFile" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file oci_dns_action_create_zone_from_zone_file}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFile(scope Construct, id *string, config DnsActionCreateZoneFromZoneFileConfig) DnsActionCreateZoneFromZoneFile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig">DnsActionCreateZoneFromZoneFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig">DnsActionCreateZoneFromZoneFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetViewId">ResetViewId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.putTimeouts"></a>

```go
func PutTimeouts(value DnsActionCreateZoneFromZoneFileTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetId"></a>

```go
func ResetId()
```

##### `ResetScope` <a name="ResetScope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetViewId` <a name="ResetViewId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.resetViewId"></a>

```go
func ResetViewId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsActionCreateZoneFromZoneFile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DnsActionCreateZoneFromZoneFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DnsActionCreateZoneFromZoneFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DnsActionCreateZoneFromZoneFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DnsActionCreateZoneFromZoneFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dnssecConfig">DnssecConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList">DnsActionCreateZoneFromZoneFileDnssecConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dnssecState">DnssecState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.externalDownstreams">ExternalDownstreams</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList">DnsActionCreateZoneFromZoneFileExternalDownstreamsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.externalMasters">ExternalMasters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList">DnsActionCreateZoneFromZoneFileExternalMastersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.isProtected">IsProtected</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.nameservers">Nameservers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList">DnsActionCreateZoneFromZoneFileNameserversList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.selfAttribute">SelfAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.serial">Serial</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference">DnsActionCreateZoneFromZoneFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.zoneTransferServers">ZoneTransferServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList">DnsActionCreateZoneFromZoneFileZoneTransferServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.zoneType">ZoneType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.createZoneFromZoneFileDetailsInput">CreateZoneFromZoneFileDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.viewIdInput">ViewIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.createZoneFromZoneFileDetails">CreateZoneFromZoneFileDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.viewId">ViewId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DnssecConfig`<sup>Required</sup> <a name="DnssecConfig" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dnssecConfig"></a>

```go
func DnssecConfig() DnsActionCreateZoneFromZoneFileDnssecConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList">DnsActionCreateZoneFromZoneFileDnssecConfigList</a>

---

##### `DnssecState`<sup>Required</sup> <a name="DnssecState" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.dnssecState"></a>

```go
func DnssecState() *string
```

- *Type:* *string

---

##### `ExternalDownstreams`<sup>Required</sup> <a name="ExternalDownstreams" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.externalDownstreams"></a>

```go
func ExternalDownstreams() DnsActionCreateZoneFromZoneFileExternalDownstreamsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList">DnsActionCreateZoneFromZoneFileExternalDownstreamsList</a>

---

##### `ExternalMasters`<sup>Required</sup> <a name="ExternalMasters" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.externalMasters"></a>

```go
func ExternalMasters() DnsActionCreateZoneFromZoneFileExternalMastersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList">DnsActionCreateZoneFromZoneFileExternalMastersList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsProtected`<sup>Required</sup> <a name="IsProtected" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.isProtected"></a>

```go
func IsProtected() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.nameservers"></a>

```go
func Nameservers() DnsActionCreateZoneFromZoneFileNameserversList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList">DnsActionCreateZoneFromZoneFileNameserversList</a>

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.selfAttribute"></a>

```go
func SelfAttribute() *string
```

- *Type:* *string

---

##### `Serial`<sup>Required</sup> <a name="Serial" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.serial"></a>

```go
func Serial() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeouts"></a>

```go
func Timeouts() DnsActionCreateZoneFromZoneFileTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference">DnsActionCreateZoneFromZoneFileTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ZoneTransferServers`<sup>Required</sup> <a name="ZoneTransferServers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.zoneTransferServers"></a>

```go
func ZoneTransferServers() DnsActionCreateZoneFromZoneFileZoneTransferServersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList">DnsActionCreateZoneFromZoneFileZoneTransferServersList</a>

---

##### `ZoneType`<sup>Required</sup> <a name="ZoneType" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.zoneType"></a>

```go
func ZoneType() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CreateZoneFromZoneFileDetailsInput`<sup>Optional</sup> <a name="CreateZoneFromZoneFileDetailsInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.createZoneFromZoneFileDetailsInput"></a>

```go
func CreateZoneFromZoneFileDetailsInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ViewIdInput`<sup>Optional</sup> <a name="ViewIdInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.viewIdInput"></a>

```go
func ViewIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CreateZoneFromZoneFileDetails`<sup>Required</sup> <a name="CreateZoneFromZoneFileDetails" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.createZoneFromZoneFileDetails"></a>

```go
func CreateZoneFromZoneFileDetails() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `ViewId`<sup>Required</sup> <a name="ViewId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.viewId"></a>

```go
func ViewId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsActionCreateZoneFromZoneFileConfig <a name="DnsActionCreateZoneFromZoneFileConfig" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

&dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CreateZoneFromZoneFileDetails: *string,
	Id: *string,
	Scope: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts,
	ViewId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#compartment_id DnsActionCreateZoneFromZoneFile#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.createZoneFromZoneFileDetails">CreateZoneFromZoneFileDetails</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create_zone_from_zone_file_details DnsActionCreateZoneFromZoneFile#create_zone_from_zone_file_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#id DnsActionCreateZoneFromZoneFile#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#scope DnsActionCreateZoneFromZoneFile#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.viewId">ViewId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#view_id DnsActionCreateZoneFromZoneFile#view_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#compartment_id DnsActionCreateZoneFromZoneFile#compartment_id}.

---

##### `CreateZoneFromZoneFileDetails`<sup>Required</sup> <a name="CreateZoneFromZoneFileDetails" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.createZoneFromZoneFileDetails"></a>

```go
CreateZoneFromZoneFileDetails *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create_zone_from_zone_file_details DnsActionCreateZoneFromZoneFile#create_zone_from_zone_file_details}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#id DnsActionCreateZoneFromZoneFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#scope DnsActionCreateZoneFromZoneFile#scope}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.timeouts"></a>

```go
Timeouts DnsActionCreateZoneFromZoneFileTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts">DnsActionCreateZoneFromZoneFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#timeouts DnsActionCreateZoneFromZoneFile#timeouts}

---

##### `ViewId`<sup>Optional</sup> <a name="ViewId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileConfig.property.viewId"></a>

```go
ViewId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#view_id DnsActionCreateZoneFromZoneFile#view_id}.

---

### DnsActionCreateZoneFromZoneFileDnssecConfig <a name="DnsActionCreateZoneFromZoneFileDnssecConfig" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

&dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFileDnssecConfig {

}
```


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

&dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions {

}
```


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

&dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData {

}
```


### DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions <a name="DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

&dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions {

}
```


### DnsActionCreateZoneFromZoneFileExternalDownstreams <a name="DnsActionCreateZoneFromZoneFileExternalDownstreams" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

&dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFileExternalDownstreams {

}
```


### DnsActionCreateZoneFromZoneFileExternalMasters <a name="DnsActionCreateZoneFromZoneFileExternalMasters" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

&dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFileExternalMasters {

}
```


### DnsActionCreateZoneFromZoneFileNameservers <a name="DnsActionCreateZoneFromZoneFileNameservers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

&dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFileNameservers {

}
```


### DnsActionCreateZoneFromZoneFileTimeouts <a name="DnsActionCreateZoneFromZoneFileTimeouts" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

&dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFileTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create DnsActionCreateZoneFromZoneFile#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#delete DnsActionCreateZoneFromZoneFile#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#update DnsActionCreateZoneFromZoneFile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#create DnsActionCreateZoneFromZoneFile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#delete DnsActionCreateZoneFromZoneFile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_action_create_zone_from_zone_file#update DnsActionCreateZoneFromZoneFile#update}.

---

### DnsActionCreateZoneFromZoneFileZoneTransferServers <a name="DnsActionCreateZoneFromZoneFileZoneTransferServers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

&dnsactioncreatezonefromzonefile.DnsActionCreateZoneFromZoneFileZoneTransferServers {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.get"></a>

```go
func Get(index *f64) DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.digestType">DigestType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.rdata">Rdata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DigestType`<sup>Required</sup> <a name="DigestType" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.digestType"></a>

```go
func DigestType() *string
```

- *Type:* *string

---

##### `Rdata`<sup>Required</sup> <a name="Rdata" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.rdata"></a>

```go
func Rdata() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsData</a>

---


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.get"></a>

```go
func Get(index *f64) DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference <a name="DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.dsData">DsData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.keyTag">KeyTag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.lengthInBytes">LengthInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid">PredecessorDnssecKeyVersionUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid">SuccessorDnssecKeyVersionUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeActivated">TimeActivated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeExpired">TimeExpired</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeInactivated">TimeInactivated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePromoted">TimePromoted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePublished">TimePublished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeUnpublished">TimeUnpublished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `DsData`<sup>Required</sup> <a name="DsData" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.dsData"></a>

```go
func DsData() DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsDsDataList</a>

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.keyTag"></a>

```go
func KeyTag() *f64
```

- *Type:* *f64

---

##### `LengthInBytes`<sup>Required</sup> <a name="LengthInBytes" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.lengthInBytes"></a>

```go
func LengthInBytes() *f64
```

- *Type:* *f64

---

##### `PredecessorDnssecKeyVersionUuid`<sup>Required</sup> <a name="PredecessorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid"></a>

```go
func PredecessorDnssecKeyVersionUuid() *string
```

- *Type:* *string

---

##### `SuccessorDnssecKeyVersionUuid`<sup>Required</sup> <a name="SuccessorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid"></a>

```go
func SuccessorDnssecKeyVersionUuid() *string
```

- *Type:* *string

---

##### `TimeActivated`<sup>Required</sup> <a name="TimeActivated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeActivated"></a>

```go
func TimeActivated() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeExpired`<sup>Required</sup> <a name="TimeExpired" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeExpired"></a>

```go
func TimeExpired() *string
```

- *Type:* *string

---

##### `TimeInactivated`<sup>Required</sup> <a name="TimeInactivated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeInactivated"></a>

```go
func TimeInactivated() *string
```

- *Type:* *string

---

##### `TimePromoted`<sup>Required</sup> <a name="TimePromoted" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePromoted"></a>

```go
func TimePromoted() *string
```

- *Type:* *string

---

##### `TimePublished`<sup>Required</sup> <a name="TimePublished" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePublished"></a>

```go
func TimePublished() *string
```

- *Type:* *string

---

##### `TimeUnpublished`<sup>Required</sup> <a name="TimeUnpublished" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeUnpublished"></a>

```go
func TimeUnpublished() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersions</a>

---


### DnsActionCreateZoneFromZoneFileDnssecConfigList <a name="DnsActionCreateZoneFromZoneFileDnssecConfigList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileDnssecConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsActionCreateZoneFromZoneFileDnssecConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.get"></a>

```go
func Get(index *f64) DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference <a name="DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileDnssecConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.kskDnssecKeyVersions">KskDnssecKeyVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.zskDnssecKeyVersions">ZskDnssecKeyVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList">DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig">DnsActionCreateZoneFromZoneFileDnssecConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KskDnssecKeyVersions`<sup>Required</sup> <a name="KskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.kskDnssecKeyVersions"></a>

```go
func KskDnssecKeyVersions() DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList">DnsActionCreateZoneFromZoneFileDnssecConfigKskDnssecKeyVersionsList</a>

---

##### `ZskDnssecKeyVersions`<sup>Required</sup> <a name="ZskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.zskDnssecKeyVersions"></a>

```go
func ZskDnssecKeyVersions() DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList">DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsActionCreateZoneFromZoneFileDnssecConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfig">DnsActionCreateZoneFromZoneFileDnssecConfig</a>

---


### DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList <a name="DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.get"></a>

```go
func Get(index *f64) DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference <a name="DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.keyTag">KeyTag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.lengthInBytes">LengthInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid">PredecessorDnssecKeyVersionUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid">SuccessorDnssecKeyVersionUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeActivated">TimeActivated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeExpired">TimeExpired</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeInactivated">TimeInactivated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePromoted">TimePromoted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePublished">TimePublished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeUnpublished">TimeUnpublished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions">DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.keyTag"></a>

```go
func KeyTag() *f64
```

- *Type:* *f64

---

##### `LengthInBytes`<sup>Required</sup> <a name="LengthInBytes" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.lengthInBytes"></a>

```go
func LengthInBytes() *f64
```

- *Type:* *f64

---

##### `PredecessorDnssecKeyVersionUuid`<sup>Required</sup> <a name="PredecessorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid"></a>

```go
func PredecessorDnssecKeyVersionUuid() *string
```

- *Type:* *string

---

##### `SuccessorDnssecKeyVersionUuid`<sup>Required</sup> <a name="SuccessorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid"></a>

```go
func SuccessorDnssecKeyVersionUuid() *string
```

- *Type:* *string

---

##### `TimeActivated`<sup>Required</sup> <a name="TimeActivated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeActivated"></a>

```go
func TimeActivated() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeExpired`<sup>Required</sup> <a name="TimeExpired" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeExpired"></a>

```go
func TimeExpired() *string
```

- *Type:* *string

---

##### `TimeInactivated`<sup>Required</sup> <a name="TimeInactivated" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeInactivated"></a>

```go
func TimeInactivated() *string
```

- *Type:* *string

---

##### `TimePromoted`<sup>Required</sup> <a name="TimePromoted" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePromoted"></a>

```go
func TimePromoted() *string
```

- *Type:* *string

---

##### `TimePublished`<sup>Required</sup> <a name="TimePublished" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePublished"></a>

```go
func TimePublished() *string
```

- *Type:* *string

---

##### `TimeUnpublished`<sup>Required</sup> <a name="TimeUnpublished" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeUnpublished"></a>

```go
func TimeUnpublished() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions">DnsActionCreateZoneFromZoneFileDnssecConfigZskDnssecKeyVersions</a>

---


### DnsActionCreateZoneFromZoneFileExternalDownstreamsList <a name="DnsActionCreateZoneFromZoneFileExternalDownstreamsList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileExternalDownstreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsActionCreateZoneFromZoneFileExternalDownstreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.get"></a>

```go
func Get(index *f64) DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference <a name="DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.tsigKeyId">TsigKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams">DnsActionCreateZoneFromZoneFileExternalDownstreams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `TsigKeyId`<sup>Required</sup> <a name="TsigKeyId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.tsigKeyId"></a>

```go
func TsigKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsActionCreateZoneFromZoneFileExternalDownstreams
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalDownstreams">DnsActionCreateZoneFromZoneFileExternalDownstreams</a>

---


### DnsActionCreateZoneFromZoneFileExternalMastersList <a name="DnsActionCreateZoneFromZoneFileExternalMastersList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileExternalMastersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsActionCreateZoneFromZoneFileExternalMastersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.get"></a>

```go
func Get(index *f64) DnsActionCreateZoneFromZoneFileExternalMastersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DnsActionCreateZoneFromZoneFileExternalMastersOutputReference <a name="DnsActionCreateZoneFromZoneFileExternalMastersOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileExternalMastersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsActionCreateZoneFromZoneFileExternalMastersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.tsigKeyId">TsigKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters">DnsActionCreateZoneFromZoneFileExternalMasters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `TsigKeyId`<sup>Required</sup> <a name="TsigKeyId" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.tsigKeyId"></a>

```go
func TsigKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMastersOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsActionCreateZoneFromZoneFileExternalMasters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileExternalMasters">DnsActionCreateZoneFromZoneFileExternalMasters</a>

---


### DnsActionCreateZoneFromZoneFileNameserversList <a name="DnsActionCreateZoneFromZoneFileNameserversList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileNameserversList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsActionCreateZoneFromZoneFileNameserversList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.get"></a>

```go
func Get(index *f64) DnsActionCreateZoneFromZoneFileNameserversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DnsActionCreateZoneFromZoneFileNameserversOutputReference <a name="DnsActionCreateZoneFromZoneFileNameserversOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileNameserversOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsActionCreateZoneFromZoneFileNameserversOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers">DnsActionCreateZoneFromZoneFileNameservers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameserversOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsActionCreateZoneFromZoneFileNameservers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileNameservers">DnsActionCreateZoneFromZoneFileNameservers</a>

---


### DnsActionCreateZoneFromZoneFileTimeoutsOutputReference <a name="DnsActionCreateZoneFromZoneFileTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsActionCreateZoneFromZoneFileTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsActionCreateZoneFromZoneFileZoneTransferServersList <a name="DnsActionCreateZoneFromZoneFileZoneTransferServersList" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileZoneTransferServersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsActionCreateZoneFromZoneFileZoneTransferServersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.get"></a>

```go
func Get(index *f64) DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference <a name="DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnsactioncreatezonefromzonefile"

dnsactioncreatezonefromzonefile.NewDnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.isTransferDestination">IsTransferDestination</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.isTransferSource">IsTransferSource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers">DnsActionCreateZoneFromZoneFileZoneTransferServers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `IsTransferDestination`<sup>Required</sup> <a name="IsTransferDestination" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.isTransferDestination"></a>

```go
func IsTransferDestination() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsTransferSource`<sup>Required</sup> <a name="IsTransferSource" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.isTransferSource"></a>

```go
func IsTransferSource() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServersOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsActionCreateZoneFromZoneFileZoneTransferServers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsActionCreateZoneFromZoneFile.DnsActionCreateZoneFromZoneFileZoneTransferServers">DnsActionCreateZoneFromZoneFileZoneTransferServers</a>

---



