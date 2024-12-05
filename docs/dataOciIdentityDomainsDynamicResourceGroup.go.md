# `dataOciIdentityDomainsDynamicResourceGroup` Submodule <a name="`dataOciIdentityDomainsDynamicResourceGroup` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsDynamicResourceGroup <a name="DataOciIdentityDomainsDynamicResourceGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group oci_identity_domains_dynamic_resource_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroup(scope Construct, id *string, config DataOciIdentityDomainsDynamicResourceGroupConfig) DataOciIdentityDomainsDynamicResourceGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig">DataOciIdentityDomainsDynamicResourceGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig">DataOciIdentityDomainsDynamicResourceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsDynamicResourceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsDynamicResourceGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsDynamicResourceGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsDynamicResourceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsDynamicResourceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.dynamicGroupAppRoles">DynamicGroupAppRoles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList">DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.grants">Grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList">DataOciIdentityDomainsDynamicResourceGroupGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList">DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList">DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.matchingRule">MatchingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList">DataOciIdentityDomainsDynamicResourceGroupMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList">DataOciIdentityDomainsDynamicResourceGroupTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.urnietfparamsscimschemasoracleidcsextensionOciTags">UrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList">DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.dynamicResourceGroupIdInput">DynamicResourceGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.dynamicResourceGroupId">DynamicResourceGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `DynamicGroupAppRoles`<sup>Required</sup> <a name="DynamicGroupAppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.dynamicGroupAppRoles"></a>

```go
func DynamicGroupAppRoles() DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList">DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList</a>

---

##### `Grants`<sup>Required</sup> <a name="Grants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.grants"></a>

```go
func Grants() DataOciIdentityDomainsDynamicResourceGroupGrantsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList">DataOciIdentityDomainsDynamicResourceGroupGrantsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList">DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList">DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `MatchingRule`<sup>Required</sup> <a name="MatchingRule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.matchingRule"></a>

```go
func MatchingRule() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsDynamicResourceGroupMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList">DataOciIdentityDomainsDynamicResourceGroupMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsDynamicResourceGroupTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList">DataOciIdentityDomainsDynamicResourceGroupTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `UrnietfparamsscimschemasoracleidcsextensionOciTags`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.urnietfparamsscimschemasoracleidcsextensionOciTags"></a>

```go
func UrnietfparamsscimschemasoracleidcsextensionOciTags() DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList">DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList</a>

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `DynamicResourceGroupIdInput`<sup>Optional</sup> <a name="DynamicResourceGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.dynamicResourceGroupIdInput"></a>

```go
func DynamicResourceGroupIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `DynamicResourceGroupId`<sup>Required</sup> <a name="DynamicResourceGroupId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.dynamicResourceGroupId"></a>

```go
func DynamicResourceGroupId() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsDynamicResourceGroupConfig <a name="DataOciIdentityDomainsDynamicResourceGroupConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

&dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DynamicResourceGroupId: *string,
	IdcsEndpoint: *string,
	Attributes: *string,
	AttributeSets: *[]*string,
	Authorization: *string,
	ResourceTypeSchemaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.dynamicResourceGroupId">DynamicResourceGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group#dynamic_resource_group_id DataOciIdentityDomainsDynamicResourceGroup#dynamic_resource_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group#idcs_endpoint DataOciIdentityDomainsDynamicResourceGroup#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group#attributes DataOciIdentityDomainsDynamicResourceGroup#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group#attribute_sets DataOciIdentityDomainsDynamicResourceGroup#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group#authorization DataOciIdentityDomainsDynamicResourceGroup#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group#resource_type_schema_version DataOciIdentityDomainsDynamicResourceGroup#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DynamicResourceGroupId`<sup>Required</sup> <a name="DynamicResourceGroupId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.dynamicResourceGroupId"></a>

```go
DynamicResourceGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group#dynamic_resource_group_id DataOciIdentityDomainsDynamicResourceGroup#dynamic_resource_group_id}.

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group#idcs_endpoint DataOciIdentityDomainsDynamicResourceGroup#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group#attributes DataOciIdentityDomainsDynamicResourceGroup#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group#attribute_sets DataOciIdentityDomainsDynamicResourceGroup#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group#authorization DataOciIdentityDomainsDynamicResourceGroup#authorization}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_dynamic_resource_group#resource_type_schema_version DataOciIdentityDomainsDynamicResourceGroup#resource_type_schema_version}.

---

### DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRoles <a name="DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRoles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRoles.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

&dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRoles {

}
```


### DataOciIdentityDomainsDynamicResourceGroupGrants <a name="DataOciIdentityDomainsDynamicResourceGroupGrants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrants.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

&dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroupGrants {

}
```


### DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedBy <a name="DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

&dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedBy {

}
```


### DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedBy <a name="DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

&dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsDynamicResourceGroupMeta <a name="DataOciIdentityDomainsDynamicResourceGroupMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

&dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroupMeta {

}
```


### DataOciIdentityDomainsDynamicResourceGroupTags <a name="DataOciIdentityDomainsDynamicResourceGroupTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

&dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroupTags {

}
```


### DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags <a name="DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

&dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags {

}
```


### DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags <a name="DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

&dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags {

}
```


### DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags <a name="DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

&dataociidentitydomainsdynamicresourcegroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList <a name="DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.adminRole">AdminRole</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.appName">AppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.legacyGroupName">LegacyGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRoles">DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminRole`<sup>Required</sup> <a name="AdminRole" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.adminRole"></a>

```go
func AdminRole() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.appName"></a>

```go
func AppName() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `LegacyGroupName`<sup>Required</sup> <a name="LegacyGroupName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.legacyGroupName"></a>

```go
func LegacyGroupName() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRoles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRoles">DataOciIdentityDomainsDynamicResourceGroupDynamicGroupAppRoles</a>

---


### DataOciIdentityDomainsDynamicResourceGroupGrantsList <a name="DataOciIdentityDomainsDynamicResourceGroupGrantsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupGrantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsDynamicResourceGroupGrantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.grantMechanism">GrantMechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrants">DataOciIdentityDomainsDynamicResourceGroupGrants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `GrantMechanism`<sup>Required</sup> <a name="GrantMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.grantMechanism"></a>

```go
func GrantMechanism() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrantsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsDynamicResourceGroupGrants
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupGrants">DataOciIdentityDomainsDynamicResourceGroupGrants</a>

---


### DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList <a name="DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedBy">DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedBy">DataOciIdentityDomainsDynamicResourceGroupIdcsCreatedBy</a>

---


### DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList <a name="DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedBy">DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedBy">DataOciIdentityDomainsDynamicResourceGroupIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsDynamicResourceGroupMetaList <a name="DataOciIdentityDomainsDynamicResourceGroupMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsDynamicResourceGroupMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMeta">DataOciIdentityDomainsDynamicResourceGroupMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsDynamicResourceGroupMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupMeta">DataOciIdentityDomainsDynamicResourceGroupMeta</a>

---


### DataOciIdentityDomainsDynamicResourceGroupTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsDynamicResourceGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTags">DataOciIdentityDomainsDynamicResourceGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsDynamicResourceGroupTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupTags">DataOciIdentityDomainsDynamicResourceGroupTags</a>

---


### DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>

---


### DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>

---


### DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList <a name="DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference <a name="DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsdynamicresourcegroup"

dataociidentitydomainsdynamicresourcegroup.NewDataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags">DefinedTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags">FreeformTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug">TagSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags"></a>

```go
func DefinedTags() DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a>

---

##### `TagSlug`<sup>Required</sup> <a name="TagSlug" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug"></a>

```go
func TagSlug() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsDynamicResourceGroup.DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags">DataOciIdentityDomainsDynamicResourceGroupUrnietfparamsscimschemasoracleidcsextensionOciTags</a>

---



