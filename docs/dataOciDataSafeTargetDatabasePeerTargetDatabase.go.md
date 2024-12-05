# `dataOciDataSafeTargetDatabasePeerTargetDatabase` Submodule <a name="`dataOciDataSafeTargetDatabasePeerTargetDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetDatabasePeerTargetDatabase <a name="DataOciDataSafeTargetDatabasePeerTargetDatabase" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database oci_data_safe_target_database_peer_target_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabasepeertargetdatabase"

dataocidatasafetargetdatabasepeertargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabase(scope Construct, id *string, config DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig) DataOciDataSafeTargetDatabasePeerTargetDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig">DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig">DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetDatabasePeerTargetDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabasepeertargetdatabase"

dataocidatasafetargetdatabasepeertargetdatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabasepeertargetdatabase"

dataocidatasafetargetdatabasepeertargetdatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabasepeertargetdatabase"

dataocidatasafetargetdatabasepeertargetdatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabasepeertargetdatabase"

dataocidatasafetargetdatabasepeertargetdatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeTargetDatabasePeerTargetDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeTargetDatabasePeerTargetDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeTargetDatabasePeerTargetDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetDatabasePeerTargetDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.databaseUniqueName">DatabaseUniqueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.dataguardAssociationId">DataguardAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.key">Key</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.peerTargetDatabaseIdInput">PeerTargetDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.targetDatabaseIdInput">TargetDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.peerTargetDatabaseId">PeerTargetDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.targetDatabaseId">TargetDatabaseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.databaseDetails"></a>

```go
func DatabaseDetails() DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList</a>

---

##### `DatabaseUniqueName`<sup>Required</sup> <a name="DatabaseUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.databaseUniqueName"></a>

```go
func DatabaseUniqueName() *string
```

- *Type:* *string

---

##### `DataguardAssociationId`<sup>Required</sup> <a name="DataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.dataguardAssociationId"></a>

```go
func DataguardAssociationId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.key"></a>

```go
func Key() *f64
```

- *Type:* *f64

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.tlsConfig"></a>

```go
func TlsConfig() DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList</a>

---

##### `PeerTargetDatabaseIdInput`<sup>Optional</sup> <a name="PeerTargetDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.peerTargetDatabaseIdInput"></a>

```go
func PeerTargetDatabaseIdInput() *string
```

- *Type:* *string

---

##### `TargetDatabaseIdInput`<sup>Optional</sup> <a name="TargetDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.targetDatabaseIdInput"></a>

```go
func TargetDatabaseIdInput() *string
```

- *Type:* *string

---

##### `PeerTargetDatabaseId`<sup>Required</sup> <a name="PeerTargetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.peerTargetDatabaseId"></a>

```go
func PeerTargetDatabaseId() *string
```

- *Type:* *string

---

##### `TargetDatabaseId`<sup>Required</sup> <a name="TargetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.targetDatabaseId"></a>

```go
func TargetDatabaseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabasepeertargetdatabase"

&dataocidatasafetargetdatabasepeertargetdatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PeerTargetDatabaseId: *string,
	TargetDatabaseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.peerTargetDatabaseId">PeerTargetDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#peer_target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#peer_target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.targetDatabaseId">TargetDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#target_database_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PeerTargetDatabaseId`<sup>Required</sup> <a name="PeerTargetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.peerTargetDatabaseId"></a>

```go
PeerTargetDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#peer_target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#peer_target_database_id}.

---

##### `TargetDatabaseId`<sup>Required</sup> <a name="TargetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseConfig.property.targetDatabaseId"></a>

```go
TargetDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_database#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabase#target_database_id}.

---

### DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabasepeertargetdatabase"

&dataocidatasafetargetdatabasepeertargetdatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails {

}
```


### DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabasepeertargetdatabase"

&dataocidatasafetargetdatabasepeertargetdatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabasepeertargetdatabase"

dataocidatasafetargetdatabasepeertargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabasepeertargetdatabase"

dataocidatasafetargetdatabasepeertargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureType">InfrastructureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureType"></a>

```go
func InfrastructureType() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterId"></a>

```go
func VmClusterId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabaseDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabasepeertargetdatabase"

dataocidatasafetargetdatabasepeertargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.get"></a>

```go
func Get(index *f64) DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafetargetdatabasepeertargetdatabase"

dataocidatasafetargetdatabasepeertargetdatabase.NewDataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.certificateStoreType">CertificateStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.keyStoreContent">KeyStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.storePassword">StorePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.trustStoreContent">TrustStoreContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateStoreType`<sup>Required</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.certificateStoreType"></a>

```go
func CertificateStoreType() *string
```

- *Type:* *string

---

##### `KeyStoreContent`<sup>Required</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.keyStoreContent"></a>

```go
func KeyStoreContent() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorePassword`<sup>Required</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.storePassword"></a>

```go
func StorePassword() *string
```

- *Type:* *string

---

##### `TrustStoreContent`<sup>Required</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.trustStoreContent"></a>

```go
func TrustStoreContent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabase.DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabaseTlsConfig</a>

---



