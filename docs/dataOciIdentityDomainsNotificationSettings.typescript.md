# `dataOciIdentityDomainsNotificationSettings` Submodule <a name="`dataOciIdentityDomainsNotificationSettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsNotificationSettings <a name="DataOciIdentityDomainsNotificationSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings oci_identity_domains_notification_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings(scope: Construct, id: string, config: DataOciIdentityDomainsNotificationSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig">DataOciIdentityDomainsNotificationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig">DataOciIdentityDomainsNotificationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsNotificationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsNotificationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsNotificationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsNotificationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsNotificationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.notificationSettings">notificationSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: DataOciIdentityDomainsNotificationSettingsNotificationSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsNotificationSettingsConfig <a name="DataOciIdentityDomainsNotificationSettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNotificationSettingsConfig: dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#idcs_endpoint DataOciIdentityDomainsNotificationSettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#attributes DataOciIdentityDomainsNotificationSettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#attribute_sets DataOciIdentityDomainsNotificationSettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#authorization DataOciIdentityDomainsNotificationSettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#compartment_id DataOciIdentityDomainsNotificationSettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#id DataOciIdentityDomainsNotificationSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#resource_type_schema_version DataOciIdentityDomainsNotificationSettings#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#idcs_endpoint DataOciIdentityDomainsNotificationSettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#attributes DataOciIdentityDomainsNotificationSettings#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#attribute_sets DataOciIdentityDomainsNotificationSettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#authorization DataOciIdentityDomainsNotificationSettings#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#compartment_id DataOciIdentityDomainsNotificationSettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#id DataOciIdentityDomainsNotificationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#resource_type_schema_version DataOciIdentityDomainsNotificationSettings#resource_type_schema_version}.

---

### DataOciIdentityDomainsNotificationSettingsNotificationSettings <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNotificationSettingsNotificationSettings: dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettings = { ... }
```


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings: dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings = { ... }
```


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress: dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress = { ... }
```


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy: dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy: dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta: dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta = { ... }
```


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNotificationSettingsNotificationSettingsTags: dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.eventId">eventId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings">DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `eventId`<sup>Required</sup> <a name="eventId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.eventId"></a>

```typescript
public readonly eventId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings">DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings</a>

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.validate">validate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.validationStatus">validationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress">DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `validate`<sup>Required</sup> <a name="validate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

---

##### `validationStatus`<sup>Required</sup> <a name="validationStatus" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.validationStatus"></a>

```typescript
public readonly validationStatus: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress">DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress</a>

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta">DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta">DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta</a>

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.eventSettings">eventSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.fromEmailAddress">fromEmailAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.notificationEnabled">notificationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.notificationSettingId">notificationSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.sendNotificationsToSecondaryEmail">sendNotificationsToSecondaryEmail</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.sendNotificationToOldAndNewPrimaryEmailsWhenAdminChangesPrimaryEmail">sendNotificationToOldAndNewPrimaryEmailsWhenAdminChangesPrimaryEmail</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.testModeEnabled">testModeEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.testRecipients">testRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettings">DataOciIdentityDomainsNotificationSettingsNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `eventSettings`<sup>Required</sup> <a name="eventSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.eventSettings"></a>

```typescript
public readonly eventSettings: DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList</a>

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `fromEmailAddress`<sup>Required</sup> <a name="fromEmailAddress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.fromEmailAddress"></a>

```typescript
public readonly fromEmailAddress: DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList</a>

---

##### `notificationEnabled`<sup>Required</sup> <a name="notificationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.notificationEnabled"></a>

```typescript
public readonly notificationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `notificationSettingId`<sup>Required</sup> <a name="notificationSettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.notificationSettingId"></a>

```typescript
public readonly notificationSettingId: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `sendNotificationsToSecondaryEmail`<sup>Required</sup> <a name="sendNotificationsToSecondaryEmail" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.sendNotificationsToSecondaryEmail"></a>

```typescript
public readonly sendNotificationsToSecondaryEmail: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sendNotificationToOldAndNewPrimaryEmailsWhenAdminChangesPrimaryEmail`<sup>Required</sup> <a name="sendNotificationToOldAndNewPrimaryEmailsWhenAdminChangesPrimaryEmail" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.sendNotificationToOldAndNewPrimaryEmailsWhenAdminChangesPrimaryEmail"></a>

```typescript
public readonly sendNotificationToOldAndNewPrimaryEmailsWhenAdminChangesPrimaryEmail: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `testModeEnabled`<sup>Required</sup> <a name="testModeEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.testModeEnabled"></a>

```typescript
public readonly testModeEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `testRecipients`<sup>Required</sup> <a name="testRecipients" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.testRecipients"></a>

```typescript
public readonly testRecipients: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsNotificationSettingsNotificationSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettings">DataOciIdentityDomainsNotificationSettingsNotificationSettings</a>

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNotificationSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags">DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags">DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags</a>

---



