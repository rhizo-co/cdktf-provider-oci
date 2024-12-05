# `dataOciDatabaseInfrastructureTargetVersion` Submodule <a name="`dataOciDatabaseInfrastructureTargetVersion` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseInfrastructureTargetVersion <a name="DataOciDatabaseInfrastructureTargetVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version oci_database_infrastructure_target_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseinfrastructuretargetversion"

dataocidatabaseinfrastructuretargetversion.NewDataOciDatabaseInfrastructureTargetVersion(scope Construct, id *string, config DataOciDatabaseInfrastructureTargetVersionConfig) DataOciDatabaseInfrastructureTargetVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig">DataOciDatabaseInfrastructureTargetVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig">DataOciDatabaseInfrastructureTargetVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetTargetResourceId">ResetTargetResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetTargetResourceType">ResetTargetResourceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetTargetResourceId` <a name="ResetTargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetTargetResourceId"></a>

```go
func ResetTargetResourceId()
```

##### `ResetTargetResourceType` <a name="ResetTargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.resetTargetResourceType"></a>

```go
func ResetTargetResourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseInfrastructureTargetVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseinfrastructuretargetversion"

dataocidatabaseinfrastructuretargetversion.DataOciDatabaseInfrastructureTargetVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseinfrastructuretargetversion"

dataocidatabaseinfrastructuretargetversion.DataOciDatabaseInfrastructureTargetVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseinfrastructuretargetversion"

dataocidatabaseinfrastructuretargetversion.DataOciDatabaseInfrastructureTargetVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseinfrastructuretargetversion"

dataocidatabaseinfrastructuretargetversion.DataOciDatabaseInfrastructureTargetVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseInfrastructureTargetVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseInfrastructureTargetVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseInfrastructureTargetVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseInfrastructureTargetVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetDbVersionHistoryEntry">TargetDbVersionHistoryEntry</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetStorageVersionHistoryEntry">TargetStorageVersionHistoryEntry</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceTypeInput">TargetResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceType">TargetResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `TargetDbVersionHistoryEntry`<sup>Required</sup> <a name="TargetDbVersionHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetDbVersionHistoryEntry"></a>

```go
func TargetDbVersionHistoryEntry() *[]*string
```

- *Type:* *[]*string

---

##### `TargetStorageVersionHistoryEntry`<sup>Required</sup> <a name="TargetStorageVersionHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetStorageVersionHistoryEntry"></a>

```go
func TargetStorageVersionHistoryEntry() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceIdInput"></a>

```go
func TargetResourceIdInput() *string
```

- *Type:* *string

---

##### `TargetResourceTypeInput`<sup>Optional</sup> <a name="TargetResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceTypeInput"></a>

```go
func TargetResourceTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceId"></a>

```go
func TargetResourceId() *string
```

- *Type:* *string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.targetResourceType"></a>

```go
func TargetResourceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseInfrastructureTargetVersionConfig <a name="DataOciDatabaseInfrastructureTargetVersionConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseinfrastructuretargetversion"

&dataocidatabaseinfrastructuretargetversion.DataOciDatabaseInfrastructureTargetVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Id: *string,
	TargetResourceId: *string,
	TargetResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#compartment_id DataOciDatabaseInfrastructureTargetVersion#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#id DataOciDatabaseInfrastructureTargetVersion#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_id DataOciDatabaseInfrastructureTargetVersion#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.targetResourceType">TargetResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_type DataOciDatabaseInfrastructureTargetVersion#target_resource_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#compartment_id DataOciDatabaseInfrastructureTargetVersion#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#id DataOciDatabaseInfrastructureTargetVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TargetResourceId`<sup>Optional</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.targetResourceId"></a>

```go
TargetResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_id DataOciDatabaseInfrastructureTargetVersion#target_resource_id}.

---

##### `TargetResourceType`<sup>Optional</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseInfrastructureTargetVersion.DataOciDatabaseInfrastructureTargetVersionConfig.property.targetResourceType"></a>

```go
TargetResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_infrastructure_target_version#target_resource_type DataOciDatabaseInfrastructureTargetVersion#target_resource_type}.

---



