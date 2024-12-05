# `dataOciCoreTunnelSecurityAssociations` Submodule <a name="`dataOciCoreTunnelSecurityAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreTunnelSecurityAssociations <a name="DataOciCoreTunnelSecurityAssociations" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations oci_core_tunnel_security_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoretunnelsecurityassociations"

dataocicoretunnelsecurityassociations.NewDataOciCoreTunnelSecurityAssociations(scope Construct, id *string, config DataOciCoreTunnelSecurityAssociationsConfig) DataOciCoreTunnelSecurityAssociations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig">DataOciCoreTunnelSecurityAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig">DataOciCoreTunnelSecurityAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreTunnelSecurityAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoretunnelsecurityassociations"

dataocicoretunnelsecurityassociations.DataOciCoreTunnelSecurityAssociations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoretunnelsecurityassociations"

dataocicoretunnelsecurityassociations.DataOciCoreTunnelSecurityAssociations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoretunnelsecurityassociations"

dataocicoretunnelsecurityassociations.DataOciCoreTunnelSecurityAssociations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoretunnelsecurityassociations"

dataocicoretunnelsecurityassociations.DataOciCoreTunnelSecurityAssociations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreTunnelSecurityAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreTunnelSecurityAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreTunnelSecurityAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreTunnelSecurityAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList">DataOciCoreTunnelSecurityAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelSecurityAssociations">TunnelSecurityAssociations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList">DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.ipsecIdInput">IpsecIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelIdInput">TunnelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.ipsecId">IpsecId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.filter"></a>

```go
func Filter() DataOciCoreTunnelSecurityAssociationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList">DataOciCoreTunnelSecurityAssociationsFilterList</a>

---

##### `TunnelSecurityAssociations`<sup>Required</sup> <a name="TunnelSecurityAssociations" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelSecurityAssociations"></a>

```go
func TunnelSecurityAssociations() DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList">DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpsecIdInput`<sup>Optional</sup> <a name="IpsecIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.ipsecIdInput"></a>

```go
func IpsecIdInput() *string
```

- *Type:* *string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelIdInput"></a>

```go
func TunnelIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.ipsecId"></a>

```go
func IpsecId() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreTunnelSecurityAssociationsConfig <a name="DataOciCoreTunnelSecurityAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoretunnelsecurityassociations"

&dataocicoretunnelsecurityassociations.DataOciCoreTunnelSecurityAssociationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IpsecId: *string,
	TunnelId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.ipsecId">IpsecId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#ipsec_id DataOciCoreTunnelSecurityAssociations#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.tunnelId">TunnelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#tunnel_id DataOciCoreTunnelSecurityAssociations#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#id DataOciCoreTunnelSecurityAssociations#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpsecId`<sup>Required</sup> <a name="IpsecId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.ipsecId"></a>

```go
IpsecId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#ipsec_id DataOciCoreTunnelSecurityAssociations#ipsec_id}.

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.tunnelId"></a>

```go
TunnelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#tunnel_id DataOciCoreTunnelSecurityAssociations#tunnel_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#filter DataOciCoreTunnelSecurityAssociations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#id DataOciCoreTunnelSecurityAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreTunnelSecurityAssociationsFilter <a name="DataOciCoreTunnelSecurityAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoretunnelsecurityassociations"

&dataocicoretunnelsecurityassociations.DataOciCoreTunnelSecurityAssociationsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#name DataOciCoreTunnelSecurityAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#values DataOciCoreTunnelSecurityAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#regex DataOciCoreTunnelSecurityAssociations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#name DataOciCoreTunnelSecurityAssociations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#values DataOciCoreTunnelSecurityAssociations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#regex DataOciCoreTunnelSecurityAssociations#regex}.

---

### DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations <a name="DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoretunnelsecurityassociations"

&dataocicoretunnelsecurityassociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreTunnelSecurityAssociationsFilterList <a name="DataOciCoreTunnelSecurityAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoretunnelsecurityassociations"

dataocicoretunnelsecurityassociations.NewDataOciCoreTunnelSecurityAssociationsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreTunnelSecurityAssociationsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreTunnelSecurityAssociationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreTunnelSecurityAssociationsFilterOutputReference <a name="DataOciCoreTunnelSecurityAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoretunnelsecurityassociations"

dataocicoretunnelsecurityassociations.NewDataOciCoreTunnelSecurityAssociationsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreTunnelSecurityAssociationsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList <a name="DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoretunnelsecurityassociations"

dataocicoretunnelsecurityassociations.NewDataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.get"></a>

```go
func Get(index *f64) DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference <a name="DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoretunnelsecurityassociations"

dataocicoretunnelsecurityassociations.NewDataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.cpeSubnet">CpeSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.oracleSubnet">OracleSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.tunnelSaErrorInfo">TunnelSaErrorInfo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.tunnelSaStatus">TunnelSaStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations">DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpeSubnet`<sup>Required</sup> <a name="CpeSubnet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.cpeSubnet"></a>

```go
func CpeSubnet() *string
```

- *Type:* *string

---

##### `OracleSubnet`<sup>Required</sup> <a name="OracleSubnet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.oracleSubnet"></a>

```go
func OracleSubnet() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `TunnelSaErrorInfo`<sup>Required</sup> <a name="TunnelSaErrorInfo" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.tunnelSaErrorInfo"></a>

```go
func TunnelSaErrorInfo() *string
```

- *Type:* *string

---

##### `TunnelSaStatus`<sup>Required</sup> <a name="TunnelSaStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.tunnelSaStatus"></a>

```go
func TunnelSaStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations">DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations</a>

---



