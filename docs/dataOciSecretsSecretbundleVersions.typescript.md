# `dataOciSecretsSecretbundleVersions` Submodule <a name="`dataOciSecretsSecretbundleVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecretsSecretbundleVersions <a name="DataOciSecretsSecretbundleVersions" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions oci_secrets_secretbundle_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer"></a>

```typescript
import { dataOciSecretsSecretbundleVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions(scope: Construct, id: string, config: DataOciSecretsSecretbundleVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig">DataOciSecretsSecretbundleVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig">DataOciSecretsSecretbundleVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciSecretsSecretbundleVersionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSecretsSecretbundleVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isConstruct"></a>

```typescript
import { dataOciSecretsSecretbundleVersions } from 'rhizo-co-terraform-provider-oci'

dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformElement"></a>

```typescript
import { dataOciSecretsSecretbundleVersions } from 'rhizo-co-terraform-provider-oci'

dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformDataSource"></a>

```typescript
import { dataOciSecretsSecretbundleVersions } from 'rhizo-co-terraform-provider-oci'

dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.generateConfigForImport"></a>

```typescript
import { dataOciSecretsSecretbundleVersions } from 'rhizo-co-terraform-provider-oci'

dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciSecretsSecretbundleVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciSecretsSecretbundleVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciSecretsSecretbundleVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecretsSecretbundleVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList">DataOciSecretsSecretbundleVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.secretBundleVersions">secretBundleVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList">DataOciSecretsSecretbundleVersionsSecretBundleVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.filter"></a>

```typescript
public readonly filter: DataOciSecretsSecretbundleVersionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList">DataOciSecretsSecretbundleVersionsFilterList</a>

---

##### `secretBundleVersions`<sup>Required</sup> <a name="secretBundleVersions" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.secretBundleVersions"></a>

```typescript
public readonly secretBundleVersions: DataOciSecretsSecretbundleVersionsSecretBundleVersionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList">DataOciSecretsSecretbundleVersionsSecretBundleVersionsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciSecretsSecretbundleVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecretsSecretbundleVersionsConfig <a name="DataOciSecretsSecretbundleVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.Initializer"></a>

```typescript
import { dataOciSecretsSecretbundleVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciSecretsSecretbundleVersionsConfig: dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#secret_id DataOciSecretsSecretbundleVersions#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#id DataOciSecretsSecretbundleVersions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#secret_id DataOciSecretsSecretbundleVersions#secret_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciSecretsSecretbundleVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#filter DataOciSecretsSecretbundleVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#id DataOciSecretsSecretbundleVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciSecretsSecretbundleVersionsFilter <a name="DataOciSecretsSecretbundleVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.Initializer"></a>

```typescript
import { dataOciSecretsSecretbundleVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciSecretsSecretbundleVersionsFilter: dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#name DataOciSecretsSecretbundleVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#values DataOciSecretsSecretbundleVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#regex DataOciSecretsSecretbundleVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#name DataOciSecretsSecretbundleVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#values DataOciSecretsSecretbundleVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#regex DataOciSecretsSecretbundleVersions#regex}.

---

### DataOciSecretsSecretbundleVersionsSecretBundleVersions <a name="DataOciSecretsSecretbundleVersionsSecretBundleVersions" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersions.Initializer"></a>

```typescript
import { dataOciSecretsSecretbundleVersions } from 'rhizo-co-terraform-provider-oci'

const dataOciSecretsSecretbundleVersionsSecretBundleVersions: dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSecretsSecretbundleVersionsFilterList <a name="DataOciSecretsSecretbundleVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer"></a>

```typescript
import { dataOciSecretsSecretbundleVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.get"></a>

```typescript
public get(index: number): DataOciSecretsSecretbundleVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciSecretsSecretbundleVersionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>[]

---


### DataOciSecretsSecretbundleVersionsFilterOutputReference <a name="DataOciSecretsSecretbundleVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciSecretsSecretbundleVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciSecretsSecretbundleVersionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>

---


### DataOciSecretsSecretbundleVersionsSecretBundleVersionsList <a name="DataOciSecretsSecretbundleVersionsSecretBundleVersionsList" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer"></a>

```typescript
import { dataOciSecretsSecretbundleVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.get"></a>

```typescript
public get(index: number): DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference <a name="DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer"></a>

```typescript
import { dataOciSecretsSecretbundleVersions } from 'rhizo-co-terraform-provider-oci'

new dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.stages">stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.timeOfExpiry">timeOfExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.versionNumber">versionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersions">DataOciSecretsSecretbundleVersionsSecretBundleVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.stages"></a>

```typescript
public readonly stages: string[];
```

- *Type:* string[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `timeOfExpiry`<sup>Required</sup> <a name="timeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.timeOfExpiry"></a>

```typescript
public readonly timeOfExpiry: string;
```

- *Type:* string

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.versionNumber"></a>

```typescript
public readonly versionNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSecretsSecretbundleVersionsSecretBundleVersions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersions">DataOciSecretsSecretbundleVersionsSecretBundleVersions</a>

---



