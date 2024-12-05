# `dataOciFleetAppsManagementFleet` Submodule <a name="`dataOciFleetAppsManagementFleet` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementFleet <a name="DataOciFleetAppsManagementFleet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet oci_fleet_apps_management_fleet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.NewDataOciFleetAppsManagementFleet(scope Construct, id *string, config DataOciFleetAppsManagementFleetConfig) DataOciFleetAppsManagementFleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig">DataOciFleetAppsManagementFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig">DataOciFleetAppsManagementFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementFleet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.DataOciFleetAppsManagementFleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.DataOciFleetAppsManagementFleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.DataOciFleetAppsManagementFleet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.DataOciFleetAppsManagementFleet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFleetAppsManagementFleet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFleetAppsManagementFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFleetAppsManagementFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.applicationType">ApplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.environmentType">EnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.fleetType">FleetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.groupType">GroupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.isTargetAutoConfirm">IsTargetAutoConfirm</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.notificationPreferences">NotificationPreferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList">DataOciFleetAppsManagementFleetNotificationPreferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.products">Products</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.resourceRegion">ResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.resourceSelectionType">ResourceSelectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.ruleSelectionCriteria">RuleSelectionCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList">DataOciFleetAppsManagementFleetRuleSelectionCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.fleetIdInput">FleetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.fleetId">FleetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.applicationType"></a>

```go
func ApplicationType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnvironmentType`<sup>Required</sup> <a name="EnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.environmentType"></a>

```go
func EnvironmentType() *string
```

- *Type:* *string

---

##### `FleetType`<sup>Required</sup> <a name="FleetType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.fleetType"></a>

```go
func FleetType() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GroupType`<sup>Required</sup> <a name="GroupType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.groupType"></a>

```go
func GroupType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsTargetAutoConfirm`<sup>Required</sup> <a name="IsTargetAutoConfirm" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.isTargetAutoConfirm"></a>

```go
func IsTargetAutoConfirm() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NotificationPreferences`<sup>Required</sup> <a name="NotificationPreferences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.notificationPreferences"></a>

```go
func NotificationPreferences() DataOciFleetAppsManagementFleetNotificationPreferencesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList">DataOciFleetAppsManagementFleetNotificationPreferencesList</a>

---

##### `Products`<sup>Required</sup> <a name="Products" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.products"></a>

```go
func Products() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.resourceRegion"></a>

```go
func ResourceRegion() *string
```

- *Type:* *string

---

##### `ResourceSelectionType`<sup>Required</sup> <a name="ResourceSelectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.resourceSelectionType"></a>

```go
func ResourceSelectionType() *string
```

- *Type:* *string

---

##### `RuleSelectionCriteria`<sup>Required</sup> <a name="RuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.ruleSelectionCriteria"></a>

```go
func RuleSelectionCriteria() DataOciFleetAppsManagementFleetRuleSelectionCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList">DataOciFleetAppsManagementFleetRuleSelectionCriteriaList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `FleetIdInput`<sup>Optional</sup> <a name="FleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.fleetIdInput"></a>

```go
func FleetIdInput() *string
```

- *Type:* *string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.fleetId"></a>

```go
func FleetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementFleetConfig <a name="DataOciFleetAppsManagementFleetConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

&dataocifleetappsmanagementfleet.DataOciFleetAppsManagementFleetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FleetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.fleetId">FleetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet#fleet_id DataOciFleetAppsManagementFleet#fleet_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetConfig.property.fleetId"></a>

```go
FleetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet#fleet_id DataOciFleetAppsManagementFleet#fleet_id}.

---

### DataOciFleetAppsManagementFleetNotificationPreferences <a name="DataOciFleetAppsManagementFleetNotificationPreferences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferences.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

&dataocifleetappsmanagementfleet.DataOciFleetAppsManagementFleetNotificationPreferences {

}
```


### DataOciFleetAppsManagementFleetNotificationPreferencesPreferences <a name="DataOciFleetAppsManagementFleetNotificationPreferencesPreferences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferences.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

&dataocifleetappsmanagementfleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferences {

}
```


### DataOciFleetAppsManagementFleetRuleSelectionCriteria <a name="DataOciFleetAppsManagementFleetRuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteria.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

&dataocifleetappsmanagementfleet.DataOciFleetAppsManagementFleetRuleSelectionCriteria {

}
```


### DataOciFleetAppsManagementFleetRuleSelectionCriteriaRules <a name="DataOciFleetAppsManagementFleetRuleSelectionCriteriaRules" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

&dataocifleetappsmanagementfleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRules {

}
```


### DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditions <a name="DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditions" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

&dataocifleetappsmanagementfleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementFleetNotificationPreferencesList <a name="DataOciFleetAppsManagementFleetNotificationPreferencesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.NewDataOciFleetAppsManagementFleetNotificationPreferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementFleetNotificationPreferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference <a name="DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.NewDataOciFleetAppsManagementFleetNotificationPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferences">Preferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList">DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicId">TopicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferences">DataOciFleetAppsManagementFleetNotificationPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Preferences`<sup>Required</sup> <a name="Preferences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferences"></a>

```go
func Preferences() DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList">DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList</a>

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicId"></a>

```go
func TopicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementFleetNotificationPreferences
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferences">DataOciFleetAppsManagementFleetNotificationPreferences</a>

---


### DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList <a name="DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.NewDataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference <a name="DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.NewDataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailure">OnJobFailure</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModification">OnTopologyModification</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingSchedule">OnUpcomingSchedule</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferences">DataOciFleetAppsManagementFleetNotificationPreferencesPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnJobFailure`<sup>Required</sup> <a name="OnJobFailure" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailure"></a>

```go
func OnJobFailure() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OnTopologyModification`<sup>Required</sup> <a name="OnTopologyModification" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModification"></a>

```go
func OnTopologyModification() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OnUpcomingSchedule`<sup>Required</sup> <a name="OnUpcomingSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingSchedule"></a>

```go
func OnUpcomingSchedule() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementFleetNotificationPreferencesPreferences
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetNotificationPreferencesPreferences">DataOciFleetAppsManagementFleetNotificationPreferencesPreferences</a>

---


### DataOciFleetAppsManagementFleetRuleSelectionCriteriaList <a name="DataOciFleetAppsManagementFleetRuleSelectionCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.NewDataOciFleetAppsManagementFleetRuleSelectionCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementFleetRuleSelectionCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference <a name="DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.NewDataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchCondition">MatchCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList">DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteria">DataOciFleetAppsManagementFleetRuleSelectionCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchCondition"></a>

```go
func MatchCondition() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rules"></a>

```go
func Rules() DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList">DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementFleetRuleSelectionCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteria">DataOciFleetAppsManagementFleetRuleSelectionCriteria</a>

---


### DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList <a name="DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.NewDataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference <a name="DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.NewDataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroup">AttrGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKey">AttrKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValue">AttrValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttrGroup`<sup>Required</sup> <a name="AttrGroup" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroup"></a>

```go
func AttrGroup() *string
```

- *Type:* *string

---

##### `AttrKey`<sup>Required</sup> <a name="AttrKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKey"></a>

```go
func AttrKey() *string
```

- *Type:* *string

---

##### `AttrValue`<sup>Required</sup> <a name="AttrValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValue"></a>

```go
func AttrValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>

---


### DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList <a name="DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.NewDataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference <a name="DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementfleet"

dataocifleetappsmanagementfleet.NewDataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basis">Basis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList">DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRules">DataOciFleetAppsManagementFleetRuleSelectionCriteriaRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Basis`<sup>Required</sup> <a name="Basis" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basis"></a>

```go
func Basis() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditions"></a>

```go
func Conditions() DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList">DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList</a>

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentId"></a>

```go
func ResourceCompartmentId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementFleetRuleSelectionCriteriaRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleet.DataOciFleetAppsManagementFleetRuleSelectionCriteriaRules">DataOciFleetAppsManagementFleetRuleSelectionCriteriaRules</a>

---



