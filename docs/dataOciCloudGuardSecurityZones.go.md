# `dataOciCloudGuardSecurityZones` Submodule <a name="`dataOciCloudGuardSecurityZones` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardSecurityZones <a name="DataOciCloudGuardSecurityZones" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones oci_cloud_guard_security_zones}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

dataocicloudguardsecurityzones.NewDataOciCloudGuardSecurityZones(scope Construct, id *string, config DataOciCloudGuardSecurityZonesConfig) DataOciCloudGuardSecurityZones
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig">DataOciCloudGuardSecurityZonesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig">DataOciCloudGuardSecurityZonesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetIsRequiredSecurityZonesInSubtree">ResetIsRequiredSecurityZonesInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetSecurityRecipeId">ResetSecurityRecipeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetId"></a>

```go
func ResetId()
```

##### `ResetIsRequiredSecurityZonesInSubtree` <a name="ResetIsRequiredSecurityZonesInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetIsRequiredSecurityZonesInSubtree"></a>

```go
func ResetIsRequiredSecurityZonesInSubtree()
```

##### `ResetSecurityRecipeId` <a name="ResetSecurityRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetSecurityRecipeId"></a>

```go
func ResetSecurityRecipeId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardSecurityZones resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

dataocicloudguardsecurityzones.DataOciCloudGuardSecurityZones_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

dataocicloudguardsecurityzones.DataOciCloudGuardSecurityZones_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

dataocicloudguardsecurityzones.DataOciCloudGuardSecurityZones_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

dataocicloudguardsecurityzones.DataOciCloudGuardSecurityZones_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCloudGuardSecurityZones resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCloudGuardSecurityZones to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCloudGuardSecurityZones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardSecurityZones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList">DataOciCloudGuardSecurityZonesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.securityZoneCollection">SecurityZoneCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList">DataOciCloudGuardSecurityZonesSecurityZoneCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.isRequiredSecurityZonesInSubtreeInput">IsRequiredSecurityZonesInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.securityRecipeIdInput">SecurityRecipeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.isRequiredSecurityZonesInSubtree">IsRequiredSecurityZonesInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.securityRecipeId">SecurityRecipeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.filter"></a>

```go
func Filter() DataOciCloudGuardSecurityZonesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList">DataOciCloudGuardSecurityZonesFilterList</a>

---

##### `SecurityZoneCollection`<sup>Required</sup> <a name="SecurityZoneCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.securityZoneCollection"></a>

```go
func SecurityZoneCollection() DataOciCloudGuardSecurityZonesSecurityZoneCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList">DataOciCloudGuardSecurityZonesSecurityZoneCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsRequiredSecurityZonesInSubtreeInput`<sup>Optional</sup> <a name="IsRequiredSecurityZonesInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.isRequiredSecurityZonesInSubtreeInput"></a>

```go
func IsRequiredSecurityZonesInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityRecipeIdInput`<sup>Optional</sup> <a name="SecurityRecipeIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.securityRecipeIdInput"></a>

```go
func SecurityRecipeIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsRequiredSecurityZonesInSubtree`<sup>Required</sup> <a name="IsRequiredSecurityZonesInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.isRequiredSecurityZonesInSubtree"></a>

```go
func IsRequiredSecurityZonesInSubtree() interface{}
```

- *Type:* interface{}

---

##### `SecurityRecipeId`<sup>Required</sup> <a name="SecurityRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.securityRecipeId"></a>

```go
func SecurityRecipeId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZones.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardSecurityZonesConfig <a name="DataOciCloudGuardSecurityZonesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

&dataocicloudguardsecurityzones.DataOciCloudGuardSecurityZonesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	IsRequiredSecurityZonesInSubtree: interface{},
	SecurityRecipeId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#compartment_id DataOciCloudGuardSecurityZones#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#display_name DataOciCloudGuardSecurityZones#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#id DataOciCloudGuardSecurityZones#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.isRequiredSecurityZonesInSubtree">IsRequiredSecurityZonesInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#is_required_security_zones_in_subtree DataOciCloudGuardSecurityZones#is_required_security_zones_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.securityRecipeId">SecurityRecipeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#security_recipe_id DataOciCloudGuardSecurityZones#security_recipe_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#state DataOciCloudGuardSecurityZones#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#compartment_id DataOciCloudGuardSecurityZones#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#display_name DataOciCloudGuardSecurityZones#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#filter DataOciCloudGuardSecurityZones#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#id DataOciCloudGuardSecurityZones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsRequiredSecurityZonesInSubtree`<sup>Optional</sup> <a name="IsRequiredSecurityZonesInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.isRequiredSecurityZonesInSubtree"></a>

```go
IsRequiredSecurityZonesInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#is_required_security_zones_in_subtree DataOciCloudGuardSecurityZones#is_required_security_zones_in_subtree}.

---

##### `SecurityRecipeId`<sup>Optional</sup> <a name="SecurityRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.securityRecipeId"></a>

```go
SecurityRecipeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#security_recipe_id DataOciCloudGuardSecurityZones#security_recipe_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#state DataOciCloudGuardSecurityZones#state}.

---

### DataOciCloudGuardSecurityZonesFilter <a name="DataOciCloudGuardSecurityZonesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

&dataocicloudguardsecurityzones.DataOciCloudGuardSecurityZonesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#name DataOciCloudGuardSecurityZones#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#values DataOciCloudGuardSecurityZones#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#regex DataOciCloudGuardSecurityZones#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#name DataOciCloudGuardSecurityZones#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#values DataOciCloudGuardSecurityZones#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_zones#regex DataOciCloudGuardSecurityZones#regex}.

---

### DataOciCloudGuardSecurityZonesSecurityZoneCollection <a name="DataOciCloudGuardSecurityZonesSecurityZoneCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

&dataocicloudguardsecurityzones.DataOciCloudGuardSecurityZonesSecurityZoneCollection {

}
```


### DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems <a name="DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

&dataocicloudguardsecurityzones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardSecurityZonesFilterList <a name="DataOciCloudGuardSecurityZonesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

dataocicloudguardsecurityzones.NewDataOciCloudGuardSecurityZonesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardSecurityZonesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardSecurityZonesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCloudGuardSecurityZonesFilterOutputReference <a name="DataOciCloudGuardSecurityZonesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

dataocicloudguardsecurityzones.NewDataOciCloudGuardSecurityZonesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardSecurityZonesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList <a name="DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

dataocicloudguardsecurityzones.NewDataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference <a name="DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

dataocicloudguardsecurityzones.NewDataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.inheritedByCompartments">InheritedByCompartments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.securityZoneRecipeId">SecurityZoneRecipeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.securityZoneTargetId">SecurityZoneTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems">DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InheritedByCompartments`<sup>Required</sup> <a name="InheritedByCompartments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.inheritedByCompartments"></a>

```go
func InheritedByCompartments() *[]*string
```

- *Type:* *[]*string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `SecurityZoneRecipeId`<sup>Required</sup> <a name="SecurityZoneRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.securityZoneRecipeId"></a>

```go
func SecurityZoneRecipeId() *string
```

- *Type:* *string

---

##### `SecurityZoneTargetId`<sup>Required</sup> <a name="SecurityZoneTargetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.securityZoneTargetId"></a>

```go
func SecurityZoneTargetId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems">DataOciCloudGuardSecurityZonesSecurityZoneCollectionItems</a>

---


### DataOciCloudGuardSecurityZonesSecurityZoneCollectionList <a name="DataOciCloudGuardSecurityZonesSecurityZoneCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

dataocicloudguardsecurityzones.NewDataOciCloudGuardSecurityZonesSecurityZoneCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardSecurityZonesSecurityZoneCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference <a name="DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardsecurityzones"

dataocicloudguardsecurityzones.NewDataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList">DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollection">DataOciCloudGuardSecurityZonesSecurityZoneCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList">DataOciCloudGuardSecurityZonesSecurityZoneCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardSecurityZonesSecurityZoneCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityZones.DataOciCloudGuardSecurityZonesSecurityZoneCollection">DataOciCloudGuardSecurityZonesSecurityZoneCollection</a>

---



