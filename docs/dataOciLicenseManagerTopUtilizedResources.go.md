# `dataOciLicenseManagerTopUtilizedResources` Submodule <a name="`dataOciLicenseManagerTopUtilizedResources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerTopUtilizedResources <a name="DataOciLicenseManagerTopUtilizedResources" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources oci_license_manager_top_utilized_resources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagertoputilizedresources"

dataocilicensemanagertoputilizedresources.NewDataOciLicenseManagerTopUtilizedResources(scope Construct, id *string, config DataOciLicenseManagerTopUtilizedResourcesConfig) DataOciLicenseManagerTopUtilizedResources
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig">DataOciLicenseManagerTopUtilizedResourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig">DataOciLicenseManagerTopUtilizedResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetIsCompartmentIdInSubtree">ResetIsCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetResourceUnitType">ResetResourceUnitType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetId"></a>

```go
func ResetId()
```

##### `ResetIsCompartmentIdInSubtree` <a name="ResetIsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetIsCompartmentIdInSubtree"></a>

```go
func ResetIsCompartmentIdInSubtree()
```

##### `ResetResourceUnitType` <a name="ResetResourceUnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.resetResourceUnitType"></a>

```go
func ResetResourceUnitType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerTopUtilizedResources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagertoputilizedresources"

dataocilicensemanagertoputilizedresources.DataOciLicenseManagerTopUtilizedResources_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagertoputilizedresources"

dataocilicensemanagertoputilizedresources.DataOciLicenseManagerTopUtilizedResources_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagertoputilizedresources"

dataocilicensemanagertoputilizedresources.DataOciLicenseManagerTopUtilizedResources_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagertoputilizedresources"

dataocilicensemanagertoputilizedresources.DataOciLicenseManagerTopUtilizedResources_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLicenseManagerTopUtilizedResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLicenseManagerTopUtilizedResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLicenseManagerTopUtilizedResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerTopUtilizedResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList">DataOciLicenseManagerTopUtilizedResourcesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.isCompartmentIdInSubtreeInput">IsCompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.resourceUnitTypeInput">ResourceUnitTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.resourceUnitType">ResourceUnitType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.items"></a>

```go
func Items() DataOciLicenseManagerTopUtilizedResourcesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList">DataOciLicenseManagerTopUtilizedResourcesItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="IsCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.isCompartmentIdInSubtreeInput"></a>

```go
func IsCompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceUnitTypeInput`<sup>Optional</sup> <a name="ResourceUnitTypeInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.resourceUnitTypeInput"></a>

```go
func ResourceUnitTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsCompartmentIdInSubtree`<sup>Required</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.isCompartmentIdInSubtree"></a>

```go
func IsCompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `ResourceUnitType`<sup>Required</sup> <a name="ResourceUnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.resourceUnitType"></a>

```go
func ResourceUnitType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResources.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerTopUtilizedResourcesConfig <a name="DataOciLicenseManagerTopUtilizedResourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagertoputilizedresources"

&dataocilicensemanagertoputilizedresources.DataOciLicenseManagerTopUtilizedResourcesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Id: *string,
	IsCompartmentIdInSubtree: interface{},
	ResourceUnitType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#compartment_id DataOciLicenseManagerTopUtilizedResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#id DataOciLicenseManagerTopUtilizedResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedResources#is_compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.resourceUnitType">ResourceUnitType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#resource_unit_type DataOciLicenseManagerTopUtilizedResources#resource_unit_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#compartment_id DataOciLicenseManagerTopUtilizedResources#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#id DataOciLicenseManagerTopUtilizedResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCompartmentIdInSubtree`<sup>Optional</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.isCompartmentIdInSubtree"></a>

```go
IsCompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedResources#is_compartment_id_in_subtree}.

---

##### `ResourceUnitType`<sup>Optional</sup> <a name="ResourceUnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesConfig.property.resourceUnitType"></a>

```go
ResourceUnitType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_resources#resource_unit_type DataOciLicenseManagerTopUtilizedResources#resource_unit_type}.

---

### DataOciLicenseManagerTopUtilizedResourcesItems <a name="DataOciLicenseManagerTopUtilizedResourcesItems" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagertoputilizedresources"

&dataocilicensemanagertoputilizedresources.DataOciLicenseManagerTopUtilizedResourcesItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerTopUtilizedResourcesItemsList <a name="DataOciLicenseManagerTopUtilizedResourcesItemsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagertoputilizedresources"

dataocilicensemanagertoputilizedresources.NewDataOciLicenseManagerTopUtilizedResourcesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciLicenseManagerTopUtilizedResourcesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.get"></a>

```go
func Get(index *f64) DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference <a name="DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocilicensemanagertoputilizedresources"

dataocilicensemanagertoputilizedresources.NewDataOciLicenseManagerTopUtilizedResourcesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceCompartmentName">ResourceCompartmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.totalUnits">TotalUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.unitType">UnitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItems">DataOciLicenseManagerTopUtilizedResourcesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceCompartmentId"></a>

```go
func ResourceCompartmentId() *string
```

- *Type:* *string

---

##### `ResourceCompartmentName`<sup>Required</sup> <a name="ResourceCompartmentName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceCompartmentName"></a>

```go
func ResourceCompartmentName() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `TotalUnits`<sup>Required</sup> <a name="TotalUnits" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.totalUnits"></a>

```go
func TotalUnits() *f64
```

- *Type:* *f64

---

##### `UnitType`<sup>Required</sup> <a name="UnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.unitType"></a>

```go
func UnitType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciLicenseManagerTopUtilizedResourcesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedResources.DataOciLicenseManagerTopUtilizedResourcesItems">DataOciLicenseManagerTopUtilizedResourcesItems</a>

---



