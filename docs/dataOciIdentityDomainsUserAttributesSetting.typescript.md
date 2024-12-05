# `dataOciIdentityDomainsUserAttributesSetting` Submodule <a name="`dataOciIdentityDomainsUserAttributesSetting` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsUserAttributesSetting <a name="DataOciIdentityDomainsUserAttributesSetting" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting oci_identity_domains_user_attributes_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting(scope: Construct, id: string, config: DataOciIdentityDomainsUserAttributesSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig">DataOciIdentityDomainsUserAttributesSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig">DataOciIdentityDomainsUserAttributesSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsUserAttributesSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsUserAttributesSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsUserAttributesSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsUserAttributesSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsUserAttributesSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.attributeSettings">attributeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList">DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList">DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList">DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList">DataOciIdentityDomainsUserAttributesSettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList">DataOciIdentityDomainsUserAttributesSettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.userAttributesSettingIdInput">userAttributesSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.userAttributesSettingId">userAttributesSettingId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `attributeSettings`<sup>Required</sup> <a name="attributeSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.attributeSettings"></a>

```typescript
public readonly attributeSettings: DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList">DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList</a>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList">DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList">DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsUserAttributesSettingMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList">DataOciIdentityDomainsUserAttributesSettingMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsUserAttributesSettingTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList">DataOciIdentityDomainsUserAttributesSettingTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `userAttributesSettingIdInput`<sup>Optional</sup> <a name="userAttributesSettingIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.userAttributesSettingIdInput"></a>

```typescript
public readonly userAttributesSettingIdInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `userAttributesSettingId`<sup>Required</sup> <a name="userAttributesSettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.userAttributesSettingId"></a>

```typescript
public readonly userAttributesSettingId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsUserAttributesSettingAttributeSettings <a name="DataOciIdentityDomainsUserAttributesSettingAttributeSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsUserAttributesSettingAttributeSettings: dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettings = { ... }
```


### DataOciIdentityDomainsUserAttributesSettingConfig <a name="DataOciIdentityDomainsUserAttributesSettingConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsUserAttributesSettingConfig: dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#idcs_endpoint DataOciIdentityDomainsUserAttributesSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.userAttributesSettingId">userAttributesSettingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#user_attributes_setting_id DataOciIdentityDomainsUserAttributesSetting#user_attributes_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#attributes DataOciIdentityDomainsUserAttributesSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#attribute_sets DataOciIdentityDomainsUserAttributesSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#authorization DataOciIdentityDomainsUserAttributesSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#id DataOciIdentityDomainsUserAttributesSetting#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#resource_type_schema_version DataOciIdentityDomainsUserAttributesSetting#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#idcs_endpoint DataOciIdentityDomainsUserAttributesSetting#idcs_endpoint}.

---

##### `userAttributesSettingId`<sup>Required</sup> <a name="userAttributesSettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.userAttributesSettingId"></a>

```typescript
public readonly userAttributesSettingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#user_attributes_setting_id DataOciIdentityDomainsUserAttributesSetting#user_attributes_setting_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#attributes DataOciIdentityDomainsUserAttributesSetting#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#attribute_sets DataOciIdentityDomainsUserAttributesSetting#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#authorization DataOciIdentityDomainsUserAttributesSetting#authorization}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#id DataOciIdentityDomainsUserAttributesSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_setting#resource_type_schema_version DataOciIdentityDomainsUserAttributesSetting#resource_type_schema_version}.

---

### DataOciIdentityDomainsUserAttributesSettingIdcsCreatedBy <a name="DataOciIdentityDomainsUserAttributesSettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsUserAttributesSettingIdcsCreatedBy: dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedBy <a name="DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedBy: dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsUserAttributesSettingMeta <a name="DataOciIdentityDomainsUserAttributesSettingMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsUserAttributesSettingMeta: dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMeta = { ... }
```


### DataOciIdentityDomainsUserAttributesSettingTags <a name="DataOciIdentityDomainsUserAttributesSettingTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsUserAttributesSettingTags: dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList <a name="DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.property.endUserMutability">endUserMutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.property.endUserMutabilityCanonicalValues">endUserMutabilityCanonicalValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettings">DataOciIdentityDomainsUserAttributesSettingAttributeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endUserMutability`<sup>Required</sup> <a name="endUserMutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.property.endUserMutability"></a>

```typescript
public readonly endUserMutability: string;
```

- *Type:* string

---

##### `endUserMutabilityCanonicalValues`<sup>Required</sup> <a name="endUserMutabilityCanonicalValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.property.endUserMutabilityCanonicalValues"></a>

```typescript
public readonly endUserMutabilityCanonicalValues: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsUserAttributesSettingAttributeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingAttributeSettings">DataOciIdentityDomainsUserAttributesSettingAttributeSettings</a>

---


### DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList <a name="DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedBy">DataOciIdentityDomainsUserAttributesSettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsUserAttributesSettingIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsCreatedBy">DataOciIdentityDomainsUserAttributesSettingIdcsCreatedBy</a>

---


### DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList <a name="DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedBy">DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedBy">DataOciIdentityDomainsUserAttributesSettingIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsUserAttributesSettingMetaList <a name="DataOciIdentityDomainsUserAttributesSettingMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsUserAttributesSettingMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsUserAttributesSettingMetaOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMeta">DataOciIdentityDomainsUserAttributesSettingMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsUserAttributesSettingMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingMeta">DataOciIdentityDomainsUserAttributesSettingMeta</a>

---


### DataOciIdentityDomainsUserAttributesSettingTagsList <a name="DataOciIdentityDomainsUserAttributesSettingTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsUserAttributesSettingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsUserAttributesSettingTagsOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSetting } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTags">DataOciIdentityDomainsUserAttributesSettingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsUserAttributesSettingTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSetting.DataOciIdentityDomainsUserAttributesSettingTags">DataOciIdentityDomainsUserAttributesSettingTags</a>

---



