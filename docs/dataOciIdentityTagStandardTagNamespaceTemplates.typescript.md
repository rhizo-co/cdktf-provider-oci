# `dataOciIdentityTagStandardTagNamespaceTemplates` Submodule <a name="`dataOciIdentityTagStandardTagNamespaceTemplates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityTagStandardTagNamespaceTemplates <a name="DataOciIdentityTagStandardTagNamespaceTemplates" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates oci_identity_tag_standard_tag_namespace_templates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates(scope: Construct, id: string, config: DataOciIdentityTagStandardTagNamespaceTemplatesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig">DataOciIdentityTagStandardTagNamespaceTemplatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig">DataOciIdentityTagStandardTagNamespaceTemplatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciIdentityTagStandardTagNamespaceTemplatesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter">DataOciIdentityTagStandardTagNamespaceTemplatesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityTagStandardTagNamespaceTemplates resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isConstruct"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplates } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformElement"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplates } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplates } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.generateConfigForImport"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplates } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityTagStandardTagNamespaceTemplates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityTagStandardTagNamespaceTemplates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityTagStandardTagNamespaceTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityTagStandardTagNamespaceTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList">DataOciIdentityTagStandardTagNamespaceTemplatesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.standardTagNamespaceTemplates">standardTagNamespaceTemplates</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList">DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter">DataOciIdentityTagStandardTagNamespaceTemplatesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.filter"></a>

```typescript
public readonly filter: DataOciIdentityTagStandardTagNamespaceTemplatesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList">DataOciIdentityTagStandardTagNamespaceTemplatesFilterList</a>

---

##### `standardTagNamespaceTemplates`<sup>Required</sup> <a name="standardTagNamespaceTemplates" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.standardTagNamespaceTemplates"></a>

```typescript
public readonly standardTagNamespaceTemplates: DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList">DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciIdentityTagStandardTagNamespaceTemplatesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter">DataOciIdentityTagStandardTagNamespaceTemplatesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityTagStandardTagNamespaceTemplatesConfig <a name="DataOciIdentityTagStandardTagNamespaceTemplatesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.Initializer"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityTagStandardTagNamespaceTemplatesConfig: dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#compartment_id DataOciIdentityTagStandardTagNamespaceTemplates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter">DataOciIdentityTagStandardTagNamespaceTemplatesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#id DataOciIdentityTagStandardTagNamespaceTemplates#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#compartment_id DataOciIdentityTagStandardTagNamespaceTemplates#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciIdentityTagStandardTagNamespaceTemplatesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter">DataOciIdentityTagStandardTagNamespaceTemplatesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#filter DataOciIdentityTagStandardTagNamespaceTemplates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#id DataOciIdentityTagStandardTagNamespaceTemplates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciIdentityTagStandardTagNamespaceTemplatesFilter <a name="DataOciIdentityTagStandardTagNamespaceTemplatesFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.Initializer"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityTagStandardTagNamespaceTemplatesFilter: dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#name DataOciIdentityTagStandardTagNamespaceTemplates#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#values DataOciIdentityTagStandardTagNamespaceTemplates#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#regex DataOciIdentityTagStandardTagNamespaceTemplates#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#name DataOciIdentityTagStandardTagNamespaceTemplates#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#values DataOciIdentityTagStandardTagNamespaceTemplates#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#regex DataOciIdentityTagStandardTagNamespaceTemplates#regex}.

---

### DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates <a name="DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates.Initializer"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates: dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityTagStandardTagNamespaceTemplatesFilterList <a name="DataOciIdentityTagStandardTagNamespaceTemplatesFilterList" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.get"></a>

```typescript
public get(index: number): DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter">DataOciIdentityTagStandardTagNamespaceTemplatesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciIdentityTagStandardTagNamespaceTemplatesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter">DataOciIdentityTagStandardTagNamespaceTemplatesFilter</a>[]

---


### DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference <a name="DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter">DataOciIdentityTagStandardTagNamespaceTemplatesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciIdentityTagStandardTagNamespaceTemplatesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter">DataOciIdentityTagStandardTagNamespaceTemplatesFilter</a>

---


### DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList <a name="DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.get"></a>

```typescript
public get(index: number): DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference <a name="DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.standardTagNamespaceName">standardTagNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates">DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `standardTagNamespaceName`<sup>Required</sup> <a name="standardTagNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.standardTagNamespaceName"></a>

```typescript
public readonly standardTagNamespaceName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates">DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates</a>

---



