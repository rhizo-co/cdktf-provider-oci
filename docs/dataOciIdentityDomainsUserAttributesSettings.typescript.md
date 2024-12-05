# `dataOciIdentityDomainsUserAttributesSettings` Submodule <a name="`dataOciIdentityDomainsUserAttributesSettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsUserAttributesSettings <a name="DataOciIdentityDomainsUserAttributesSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings oci_identity_domains_user_attributes_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings(scope: Construct, id: string, config: DataOciIdentityDomainsUserAttributesSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig">DataOciIdentityDomainsUserAttributesSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig">DataOciIdentityDomainsUserAttributesSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsUserAttributesSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsUserAttributesSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsUserAttributesSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsUserAttributesSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsUserAttributesSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.userAttributesSettings">userAttributesSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `userAttributesSettings`<sup>Required</sup> <a name="userAttributesSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.userAttributesSettings"></a>

```typescript
public readonly userAttributesSettings: DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList</a>

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsUserAttributesSettingsConfig <a name="DataOciIdentityDomainsUserAttributesSettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsUserAttributesSettingsConfig: dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#idcs_endpoint DataOciIdentityDomainsUserAttributesSettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#attributes DataOciIdentityDomainsUserAttributesSettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#attribute_sets DataOciIdentityDomainsUserAttributesSettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#authorization DataOciIdentityDomainsUserAttributesSettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#compartment_id DataOciIdentityDomainsUserAttributesSettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#id DataOciIdentityDomainsUserAttributesSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#resource_type_schema_version DataOciIdentityDomainsUserAttributesSettings#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#idcs_endpoint DataOciIdentityDomainsUserAttributesSettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#attributes DataOciIdentityDomainsUserAttributesSettings#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#attribute_sets DataOciIdentityDomainsUserAttributesSettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#authorization DataOciIdentityDomainsUserAttributesSettings#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#compartment_id DataOciIdentityDomainsUserAttributesSettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#id DataOciIdentityDomainsUserAttributesSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#resource_type_schema_version DataOciIdentityDomainsUserAttributesSettings#resource_type_schema_version}.

---

### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings: dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings = { ... }
```


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings: dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings = { ... }
```


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy: dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy: dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta: dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta = { ... }
```


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags: dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.endUserMutability">endUserMutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.endUserMutabilityCanonicalValues">endUserMutabilityCanonicalValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endUserMutability`<sup>Required</sup> <a name="endUserMutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.endUserMutability"></a>

```typescript
public readonly endUserMutability: string;
```

- *Type:* string

---

##### `endUserMutabilityCanonicalValues`<sup>Required</sup> <a name="endUserMutabilityCanonicalValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.endUserMutabilityCanonicalValues"></a>

```typescript
public readonly endUserMutabilityCanonicalValues: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings</a>

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta</a>

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.attributeSettings">attributeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.userAttributesSettingId">userAttributesSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `attributeSettings`<sup>Required</sup> <a name="attributeSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.attributeSettings"></a>

```typescript
public readonly attributeSettings: DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList</a>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `userAttributesSettingId`<sup>Required</sup> <a name="userAttributesSettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.userAttributesSettingId"></a>

```typescript
public readonly userAttributesSettingId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings</a>

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsUserAttributesSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags</a>

---



